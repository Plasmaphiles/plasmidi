import mido
import sys
import json
from convert import Song
import os

if len(sys.argv) < 2:
    print('Convert a MIDI file to a format that\'s easy to parse in Plasma.\n')
    print('Usage: python3 plasmidi.py MIDI_FILE.mid {TRACK1} {TRACK2}')
    print('If no TRACK parameters are passed, all tracks are output.')
    exit()

print(os.path.dirname("."))
midi = mido.MidiFile(sys.argv[1])
song = Song(midi)
notes = song.process()

tracks = [i for ix, i in enumerate(sys.argv) if ix > 1]
if len(tracks):
    tmp = []
    for track in notes:
        if str(track['num']) in tracks or track['name'] in tracks:
            tmp += [track]
    notes = tmp

print(json.dumps(notes))
