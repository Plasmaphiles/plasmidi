# plasMIDI
Convert midi files to a data format Plasma devices can easily digest


# How to Use
## [plasmidi.com](https://www.plasmidi.com/)
Upload a MIDI file and click the "Process file" button. After that, some text will appear in the output section. It will likely be shortened, as there tends to be a lot of text in the output, so click on the Copy to Clipboard button and then you can return to Plasma to paste that text into our music-playing device. You can find it by searching for it by ID in the Device Browser window of Plasma. **ID: 2974886965**

## plasmidi.py

## Local Server
```
git clone https://github.com/ZacharyWesterman/plasmidi
cd plasmidi
npm install
npm run develop
```
# Limitations
Right now, there is no way to play two instruments at the same time in sync. Because there are variations in the processing time of different instruments, slightly different delays will be introduced into their outputs. These delays are not noticible in a single instrument, but their difference compounds over time and the two tracks will drift apart. We are working on this.

The text is very large. It may take a while to paste into Plasma, and if things freeze up for a moment or two, that is to be expected. We are considering a method of compressing our data, as well as alternative delivery methods. No matter what, we will continue to optimize every aspect of plasMIDI.

# About
Plasma is an engineering sandbox game where you can create your own devices and worlds. Recently, they added the ability for you to create a variety of sounds large enough to be able to play real music in Plasma.

Plasma, being an open sandbox, is not geared directly towards music creation, and even with this great new functionality, it would still be difficult to hand-transcribe music into a form workable in Plasma.

That's where we come in. We made this tool to allow you to upload any MIDI file and get a text representation of the music in a formatted text format that's able to be further worked with in Plasma.

In order to easily use this text format for music production, we've made our own device that is designed to play notes when given text in this format. You can find it by searching for it by ID in the Device Browser window of Plasma. ID: 2974886965