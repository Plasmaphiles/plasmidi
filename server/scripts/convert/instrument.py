__all__ = ['to_plasma']

__ID_LIST = {
	# 'Drum/Kick': [35, 36],
	# 'Drum/Snare': [38, 40],
	# 'Drum/HH': [42, 46, 51, 52, 53, 54, 55, 59],
	# 'Drum/Crash': [49, 57],
	# 'Drum/Tom1': [48, 50, 60, 62, 63, 65, 67] + range(112, 119),
	# 'Drum/Tom2': [41, 43, 45, 47, 61, 64, 66, 68],
	'Bass': [range(32, 40)],
	'Keys': [range(0, 32)] + [range(40, 80)],
	'Pads': [range(80, 104)],
}

#Generate reverse instrument list for fast lookup.
__INSTR_LIST = {}
for i in __ID_LIST:
	for k in __ID_LIST[i]:
		__INSTR_LIST[k] = i

"""
Convert a midi instrument ID to an appropriate Plasma instrument counterpart
"""
def to_plasma(instrument_id: int) -> str:
	global __INSTR_LIST
	return __INSTR_LIST.get(instrument_id, 'Keys')