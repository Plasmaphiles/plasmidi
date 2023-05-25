import base64

def compress(sequence: list) -> str:
	tones = ('A','A#','B','C','C#','D','D#','E','F','F#','G','G#')

	result = bytes()

	n1 = [i.split('+') for i in sequence[0].split('|')[0].split('&')]

	track_count = len(n1)
	chords = [len(i) for i in n1]

	#First 4 bytes of data are the number of tracks
	result += track_count.to_bytes(4, byteorder = 'big', signed = False)
	for chord in chords:
		#1 byte for each track indicates the number of notes the track may have at a time
		result += chord.to_bytes(1, byteorder = 'big', signed = False)

	previous = {}
	current = 0
	for event in sequence:
		track, delay = event.split('|')
		notes = track.replace('&', '+').split('+')
		zeroes = 0
		for note in notes:
			if note != ' ':
				if zeroes:
					result += bytes([0,zeroes])
					zeroes = 0

				tone, octave, volume = note.split('/')
				note_byte = len(tones) * int(octave) + tones.index(tone)
				group = bytes([note_byte, int(volume)])
				if group in previous and (current - previous[group] < 128):
					group = bytes([128 + current - previous[group]])
					previous[group] = current
				else:
					previous[group] = current

				current += 1
			else:
				zeroes += 1

		if zeroes:
			result += bytes([0, zeroes])
			zeroes = 0

		#3 bytes at the end of each line represent the delay
		result += int(delay.replace('.', '')).to_bytes(3, byteorder = 'big', signed = False)

	return base64.b85encode(result).decode('utf-8')