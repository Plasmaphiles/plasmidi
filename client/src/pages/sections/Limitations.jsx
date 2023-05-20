import Section from "../../components/Section";

const Limitations = () => (
  <Section title="Limitations">
    <p>
      MIDI files should have no more than 8 tracks in order for the Jukebox to
      play them; any extra tracks will just be ignored (this is a limitation of
      the Jukebox, not plasMIDI).
    </p>
    <p>
      We have not mapped all the possible MIDI instruments to the limited
      selection of Plasma instruments, though we are planning on implementing a
      feature for this. For now, everything plays as Keys by default, and you
      can manually change the instrument of a track by editing the "Instrument"
      property of the Jukebox's yellow controllers. Note that changing the
      instrument to any drum variant will likely have some atonal nonsense
      happening on top of the song.
    </p>
    <p>
      There are limited song options. We have plans to have more songs
      pre-loaded on the server to expand the amount of music users have access
      to. We're exploring routes for implementing this functionality. In the
      meantime, feel free to convert your own songs!
    </p>
    <p>
      The text is very large. It may take a while to paste into Plasma, and if
      things freeze up for a moment or two, that is to be expected. We are
      considering a method of compressing our data. No matter what, we will
      continue to optimize every aspect of plasMIDI.
    </p>
  </Section>
);

export default Limitations;
