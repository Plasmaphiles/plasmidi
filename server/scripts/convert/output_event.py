from .note import Note

class OutputEvent:
	def __init__(self, notes: list):
		self.notes = notes
		self.delay = 0

	def __str__(self) -> str:
		out_notes = []
		for note in self.notes:
			out_notes += ['' if note is None else f'{note.tone}/{note.octave}/{note.volume}']
		return f'{"+".join(out_notes)}|{self.delay:.4f}'