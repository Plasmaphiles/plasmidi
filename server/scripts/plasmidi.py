import mido
import sys
import json
from convert import Song

midi = mido.MidiFile(sys.argv[1])

song = Song(midi)
notes = song.process()
print(json.dumps(notes, indent=2))
# song.read()
# print(song.tracks)
# print(json.dumps(song.tracks, default = lambda o: o.__str__))