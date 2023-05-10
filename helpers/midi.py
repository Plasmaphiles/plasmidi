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
    notes = ('A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#')
    note = notes[(note_val - 21) % len(notes)]
    octave = int((note_val - 21 + 9) / len(notes))
    return note, octave
