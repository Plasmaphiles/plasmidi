from .note import Note

class OutputEvent:
	def __init__(self, notes: list):
		self.notes = notes
		self.delay = 0
		if type(notes[0]) is str and notes[0] == 'SYNC':
			self.notes.pop(0)
			self.sync = True
		else:
			self.sync = False

	def __str__(self) -> str:
		out_notes = []

		for note in self.notes:
			out_notes += [' ' if note is None else f'{note.tone}/{note.octave}/{note.volume}']
		return f'{"+".join(out_notes) if len(out_notes) else " "}|{self.delay:.4f}{"|&" if self.sync else "|"}'