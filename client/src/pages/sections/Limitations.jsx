import Section from "../../components/Section";

const Limitations = () => (
  <Section title="Limitations">
    <p>
      MIDI files should have no more than 8 tracks in order for the Jukebox to
      play them; any extra tracks will just be ignored (this is a limitation of
      the Jukebox, not plasMIDI). For the same reason, each track should have no
      more than 8 notes playing at the same time or in very quick succession;
      it's just a limitation of the Jukebox device.
    </p>
    <p>
      The default instrument mapping should sound good in most cases, however,
      due to Plasma's limited set of sounds, some MIDI instruments may
      not map well. In the end, the instruments are just a best guess, so
      feel free to tweak them until they sound good to you.
    </p>
    <p>
      There are limited song options. We have plans to have more songs
      pre-loaded on the server to expand the amount of music users have access
      to. We're exploring routes for implementing this functionality. In the
      meantime, feel free to convert your own songs!
    </p>
    <p>
      For longer songs, the uncompressed note text may be very large. It may
      take a while to paste into Plasma, and if things freeze up for a moment
      or two, that is to be expected. To get around this, you can use the
      compressed version. While not human-readable, it is much smaller than
      uncompressed and pasting it will not cause the game to freeze.
    </p>
  </Section>
);

export default Limitations;
