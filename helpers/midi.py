class MetaNotFound(Exception):
    def __init__(self, type):
        super().__init__(f'MetaMessage of type "{type}" not found!')


def find_meta(midi, type):
    for track in midi.tracks:
        for msg in track:
            if msg.is_meta and msg.type == type:
                return msg

    raise MetaNotFound(type)


def get_total_ticks(midi):
    return sum(
        sum(msg.time for msg in track if not msg.is_meta)
        for track in midi.tracks
    )


def get_note(note_val: int) -> tuple:
    notes = ('A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#')
    note = notes[(note_val - 21) % len(notes)]
    octave = int((note_val - 21 + 9) / len(notes))
    return note, octave
