import mido
import sys

midi = mido.MidiFile(sys.argv[1])
export_tracks = [int(i) for i in sys.argv[2:]]

class MetaNotFound(Exception):
	def __init__(self, kind):
		super().__init__(f'MetaMessage of type "{kind}" not found!')

def find_meta(midi, kind):
	for track in midi.tracks:
		for msg in track:
			if msg.is_meta and msg.type == kind:
				return msg

	raise MetaNotFound(kind)

def get_total_ticks(midi):
	total = 0
	for track in midi.tracks:
		for msg in track:
			if not msg.is_meta:
				total += msg.time
	return total

def get_note(note_val: int) -> tuple:
	notes = ('A','A#','B','C','C#','D','D#','E','F','F#','G','G#')
	note = notes[(note_val - 21) % len(notes)]
	octave = int((note_val - 21 + 9) / len(notes))
	return note, octave


ticks_per_beat = midi.ticks_per_beat
tempo = find_meta(midi, 'set_tempo').tempo
track_end = get_total_ticks(midi)

beat_list = [None] * (track_end + 1)
for i, track in enumerate(midi.tracks):
	if (len(export_tracks) > 0) and (i not in export_tracks): continue

	if len(export_tracks) == 0:
		print(f'Track {i}: {track.name} ({len([i for i in track])} msg)')
		continue

	current_time = 0
	k = 0
	for message in track:
		#Only pay attention to messages that say to play a note
		if message.is_meta: continue
		current_time += message.time

		if message.type != 'note_on': continue

		k += 1
		if beat_list[current_time] is None:
			beat_list[current_time] = [None] * len(export_tracks)

		#for now, assume all notes are played at the same volume
		#so ignore message.velocity
		note, octave = get_note(message.note)
		beat_list[current_time][export_tracks.index(i)] = f'{note}/{octave}'

if len(export_tracks) == 0:
	exit()

output_list = []
last_time = 0
for i, beat in enumerate(beat_list):
	if beat is None: continue

	sec = mido.tick2second(i, ticks_per_beat, tempo)
	if len(output_list) > 0:
		output_list[-1] += [f'{sec-last_time:.4f}']

	last_time = sec
	output_list += [beat]

if len(output_list) > 0:
		output_list[-1] += [0]

print('[')
for i, beat in enumerate(output_list):
	if i: print(',')
	print('  "'+' '.join(map(str, beat))+'"', end='')

print('\n]')
