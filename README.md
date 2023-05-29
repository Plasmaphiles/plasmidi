# plasMIDI

Convert midi files to a data format Plasma devices can easily digest

# How to Use

## [plasmidi.com](https://www.plasmidi.com/)

Upload a MIDI file and click the "Process file" button. After that, some text will appear in the output section. It will likely be shortened, as there tends to be a lot of text in the output, so click on the Copy to Clipboard button and then you can return to Plasma to paste that text into our music-playing device. You can find it by searching for it by ID in the Device Browser window of Plasma. **ID: 2974886965**

## plasMIDI API

API routes can be used to directly query plasMIDI data.

Songs stored in the `server/midi` folder can be queried at the `/api/process/:name` route.
For example, if you wanted to get the plasMIDI data for `server/midi/Waterloo.mid`, you could make a request using software like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/).

```
GET https://www.plasmidi.com/api/process/Waterloo
POST https://www.plasmidi.com/api/process
```

When making a POST request in Insomnia, choose the Multipart form option for the body, and add a part to the form called 'file' and choose your midi file to send.

## plasmidi.py

The `plasmidi.py` script requires the [mido python module](https://mido.readthedocs.io) to parse MIDI files. You can install this module by running the following command:

```bash
python3 -m pip install mido
```

After that, you'll need to get the python files. If you've cloned this repo, the path to plasmidi.py will be `server/scripts/plasmidi.py`. Otherwise you can download the zip file [here](https://github.com/ZacharyWesterman/plasmidi/blob/main/client/src/plasmidi.zip).

```bash
python3 path/to/plasmidi.py path/to/my_file.mid
```

It will output a JSON string representation which you can either pipe into a program or file to parse it.

If you only want one or more specific tracks, append the track number or name onto the command, and it will only output the tracks that exactly match those names/numbers:

```bash
python3 path/to/plasmidi.py path/to/my_file.mid 3 "DRUMS"
```

On Windows, you can also pipe the output into your clipboard like so:

```bash
python3 path/to/plasmidi.py path/to/my_file.mid 3 "DRUMS" | clip.exe
```

## Local Server

If you want to contribute to the web part of the project, you'll need to run the server locally to test it. You'll need to have [Node.js](https://nodejs.org/) installed in order to run the server. Once you have it, enter the following commands to clone and move to the server, then install all the dependencies and launch it.

**If you have docker:** the command `make create` will create a local enviroment

```bash
git clone https://github.com/ZacharyWesterman/plasmidi
cd plasmidi
npm install
npm run develop
```

# Makefile

to use the Makefile, type `make help` into a terminal to see the available commands

`make dev` is a useful command that spins a working version of the app up in a containerized environment

# Migrations

this project uses prisma as it's ORM and is currently using postgres as it's database implementation.

**Note:** with postgres being a relational database, changes to the schema must be preserved as migrations. when changing the prisma.schema file, run this command

```
docker compose exec plasmidi-server prisma migrate dev --schema server/prisma/schema.prisma --name "title of changes"
```

# Limitations

Right now, there is no way to play two instruments at the same time in sync. Because there are variations in the processing time of different instruments, slightly different delays will be introduced into their outputs. These delays are not noticible in a single instrument, but their difference compounds over time and the two tracks will drift apart. We are working on this.

The text is very large. It may take a while to paste into Plasma, and if things freeze up for a moment or two, that is to be expected. We are considering a method of compressing our data, as well as alternative delivery methods. No matter what, we will continue to optimize every aspect of plasMIDI.

# About

Plasma is an engineering sandbox game where you can create your own devices and worlds. Recently, they added the ability for you to create a variety of sounds large enough to be able to play real music in Plasma.

Plasma, being an open sandbox, is not geared directly towards music creation, and even with this great new functionality, it would still be difficult to hand-transcribe music into a form workable in Plasma.

That's where we come in. We made this tool to allow you to upload any MIDI file and get a text representation of the music in a formatted text format that's able to be further worked with in Plasma.

In order to easily use this text format for music production, we've made our own device that is designed to play notes when given text in this format. You can find it by searching for it by ID in the Device Browser window of Plasma. **ID: 2974886965**
