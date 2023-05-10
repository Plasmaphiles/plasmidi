from helpers.midi import get_note
import mido


def show_track_list(data):
    for i, track in enumerate(data["tracks"]):
        print(f'Track {i}: {track.name} ({len([i for i in track])} msg)')


def generate_beat_list(data):
    beat_list = [None] * (data['track_end'] + 1)
    for i, track in enumerate(data["tracks"]):
        if (i not in data['export_tracks']):
            continue

        current_time = 0
        for message in track:
            # Only pay attention to messages that say to play a note
            if message.is_meta:
                continue
            current_time += message.time

            if message.type != 'note_on':
                continue

            if beat_list[current_time] is None:
                beat_list[current_time] = [None] * \
                    len(data['export_tracks'])

            # for now, assume all notes are played at the same volume
            # so ignore message.velocity
            note, octave = get_note(message.note)
            beat_list[current_time][data['export_tracks'].index(
                i)] = f'{note}/{octave}'
    return beat_list


def generate_output_list(beat_list, song_data):
    output_list = []

    last_time = 0
    for i, beat in enumerate(beat_list):
        if beat is None:
            continue

        sec = mido.tick2second(
            i, song_data['ticks_per_beat'], song_data['tempo'])
        if len(output_list) > 0:
            output_list[-1] += [f'{sec-last_time:.4f}']

        last_time = sec
        output_list += [beat]

    if len(output_list) > 0:
        output_list[-1] += [0]

    return output_list


def print_notes(list):
    print('[')
    for i, beat in enumerate(list):
        if i:
            print(',')
        print('  "'+' '.join(map(str, beat))+'"', end='')

    print('\n]')
