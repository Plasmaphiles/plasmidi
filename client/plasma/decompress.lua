input_text = V1
EXISTING_NOTES = V2
STATE_VARS = V3

if input_text == '' then return end

--Lookup table for base85 characters
local B85_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~'
local B85_LKUP = {}
local i
for i=1, #B85_CHARS do
	B85_LKUP[B85_CHARS:sub(i,i)] = i - 1
end

--returns an iterator to get bytes off the stream one by one
function b85decode(text)
	local i = 1
	local b = 0
	local bytes = {}

	--convert an integer into 4 bytes
	local int2bytes = function(integer)
		local i
		local result = {}
		for i = 1, 4 do
			result[i] = integer % 256
			integer = math.floor(integer / 256)
		end
		return result
	end

	--main iterator: returns one byte at a time
	return function(replace_groups)
		if i <= #text and b == 0 then
			local k
			local integer = 0
			for k = 0, 4 do
				if i+k <= #text then
					local chr = text:sub(i+k, i+k)
					integer = integer * 85 + B85_LKUP[chr]
				else
					integer = integer * 85
				end
			end
			i = i + 5
			bytes = int2bytes(integer)
			b = #bytes
		end

		if b > 0 then
			local byte = bytes[b]

			--If a 'most common group' indicating byte was found, replace the byte with the appropriate group
			if replace_groups ~= nil and replace_groups[byte] ~= nil then
				local rp_byte
				local j
				for j, rp_byte in pairs(replace_groups[byte]) do
					table.insert(bytes, b, rp_byte)
				end
				b = b + #replace_groups[byte] - 1
				byte = bytes[b]
			end
			b = b - 1
			return byte
		end
	end
end

--convert a list of bytes to an integer
function bytes2int(bytes)
	local integer = 0
	local byte
	local offset = 1
	for _, byte in pairs(bytes) do
		integer = integer + (byte * offset)
		offset = offset * 256
	end
	return integer
end

--Pretty-print arbitrary data
function pretty_print(data, indent)
	if indent == nil then indent = 0 end

	local key
	local value
	local i

	if type(data) == 'table' then
		pretty_print('{', indent)
		for key, value in pairs(data) do
			pretty_print(value, indent + 1)
		end
		pretty_print('}', indent)
	else
		print(('  '):rep(indent) .. data)
	end
end

--Read a specific number of bytes from the stream
function read(stream, byte_count, replace_groups)
	local i
	local result = {}
	for i=1, byte_count do
		table.insert(result, stream(replace_groups))
	end
	return result
end

function join(array, delim)
	local key
	local value
	local result = ''
	for key, value in pairs(array) do
		if key ~= 1 then result = result .. delim end
		result = result .. value
	end
	return result
end

--[[Open byte stream for decoded data]]
stream = b85decode(input_text)

--[[Read table of most common byte groups]]
COMMON_GROUPS = {}
group_ct = stream() --first byte is num of groups (max 126)
for i=128, 128 + group_ct - 1 do
	group_sz = stream() --number of bytes in group
	COMMON_GROUPS[i] = read(stream, group_sz)
end

--[[Track count]]
TRACK_COUNT = bytes2int(read(stream, 4, COMMON_GROUPS))
--[[List of note count on each track]]
chords = read(stream, TRACK_COUNT, COMMON_GROUPS)
--[[Number of 'note' events]]
EVENT_COUNT = bytes2int(read(stream, 4, COMMON_GROUPS))
EVENT_START = 1

print(('<color=#D6C156>Received %dB of compressed PlasMIDI data.</color>'):format(#input_text))
print('  Track count = ' .. TRACK_COUNT)
print('  Chord size of each track = ['..join(chords, ', ')..']')
print('  Note event count = ' .. EVENT_COUNT)
print('Decompressing data...')

tones = {'A','A#','B','C','C#','D','D#','E','F','F#','G','G#'}

previous = {}
current = 0

function read_event()
	tracks = {}
	for track_num = 1, TRACK_COUNT do
		notes = {}

		note_num = 1
		while note_num <= chords[track_num] do
			b1 = stream(COMMON_GROUPS)

			if b1 == 254 then --No events for this chord, just 1 byte for this
				table.insert(notes, ' ')
				note_num = chords[track_num] + 1
			elseif b1 == 255 then --Null note, just 1 byte for this note
				table.insert(notes, ' ')
				note_num = note_num + 1
			else --Any regular note consists of 2 bytes
				tone = tones[(b1 % #tones) + 1]
				octave = math.floor(b1 / #tones)
				volume = stream(COMMON_GROUPS)
				table.insert(notes, string.format('%s/%d/%s', tone, octave, volume))
				note_num = note_num + 1
			end
		end

		table.insert(tracks, join(notes, '+'))
	end

	delay = bytes2int(read(stream, 3, COMMON_GROUPS)) / 10000

	return join({join(tracks, '&'), delay}, '|')
end

ALL_NOTES = {}
for _=EVENT_START, EVENT_COUNT do
	table.insert(ALL_NOTES, read_event())
end

print('Done.')
output_array(ALL_NOTES, 1)