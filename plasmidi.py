from helpers.main import *
from helpers.midi import *
import mido
import sys

midi = mido.MidiFile(sys.argv[1])


data = {
    "export_tracks": [int(
        i) for i in sys.argv[2:]],
    "ticks_per_beat": midi.ticks_per_beat,
    "tempo": find_meta(midi, 'set_tempo').tempo,
    "track_end": get_total_ticks(midi),
    "tracks": midi.tracks
}


if not len(data['export_tracks']):
    show_track_list(data)
    exit()

beat_list = generate_beat_list(data)
output_list = generate_output_list(beat_list, data)

print_notes(output_list)
