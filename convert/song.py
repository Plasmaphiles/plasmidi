import mido
from . import exceptions
from .note import Note
from .output_event import OutputEvent

class Song:
	def __init__(self, midi: mido.MidiFile):
		self.midi = midi
		self.tempo = self.__find_meta('set_tempo').tempo
		self.ticks_per_beat = self.midi.ticks_per_beat
		self.total_ticks = 0
		self.tracks = []
		self.triggers = []
		self.result = []

	def __find_meta(self, type: str) -> mido.Message:
		for track in self.midi.tracks:
			for msg in track:
				if msg.is_meta and msg.type == type:
					return msg
		raise exceptions.MetaNotFound(type)

	"""
	Read all midi data, breaking out notes into non-overlapping tracks
	Returns self so chaining operations is possible.
	"""
	def read(self) -> object:
		all_tracks = []
		for track in self.midi.tracks:
			current_time = 0

			tracks = [{
				'name': track.name,
				'notes': []
			}]

			open_notes = []
			for msg in track:
				if msg.is_meta: continue
				current_time += msg.time

				if (msg.type == 'note_on' and msg.velocity == 0) or msg.type == 'note_off':
					#Find previous "on" note of the same value and remove it from the active list.
					note = Note(msg.note, msg.velocity, current_time)
					index = open_notes.index(note)
					if index >= 0:
						orig_note = open_notes.pop(index)
						orig_note.stop = current_time

						#Break out any chords into separate tracks
						while len(tracks) < orig_note.overflow + 1:
							tracks += [{
								'name': f'{track.name} ({len(tracks)})',
								'notes': []
							}]
						tracks[orig_note.overflow]['notes'] += [orig_note]

				elif msg.type == 'note_on':
					#Add new note to the active list.
					note = Note(msg.note, msg.velocity, current_time)
					note.auto_detect_overflow(open_notes)
					open_notes += [note]

			#Take care of any notes that were turned on but not off; Just mark them as off now.
			for note in open_notes:
				#Break out any chords into separate tracks
				while len(tracks) < note.overflow + 1:
					tracks += [{
						'name': f'{track.name} ({len(tracks)})',
						'notes': []
					}]
				tracks[note.overflow]['notes'] += [note]

			self.total_ticks = max(self.total_ticks, current_time)

			all_tracks += tracks

		self.tracks = all_tracks
		return self

	"""
	Condense all tracks into a single track with all notes that start at the same time being on the same element.
	Returns self so chaining operations is possible.
	"""
	def condense(self) -> object:
		events = {}
		for track_number, track in enumerate(self.tracks):
			for note in track['notes']:
				if note.start not in events:
					events[note.start] = [None] * len(self.tracks)
					print(events[note.start])
				events[note.start][track_number] = note

		triggers = []
		for key in sorted(events.keys()):
			triggers += [{
				'time': key,
				'notes': events[key]
			}]
		self.triggers = triggers
		return self

	"""
	Calculate the delay between all triggers, relative to the previous one.
	Returns self so chaining operations is possible.
	"""
	def relate(self) -> object:
		result = []
		prev_time = 0

		for trigger in self.triggers:
			if len(result):
				result[-1].delay = mido.tick2second(trigger['time'] - prev_time, self.ticks_per_beat, self.tempo)

			result += [OutputEvent(trigger['notes'])]
			prev_time = trigger['time']

		self.result = result
		return self

	def process(self) -> list:
		return [str(i) for i in self.read().condense().relate().result]