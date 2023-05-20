import Section from "../../components/Section";

const Limitations = () => (
  <Section title="Limitations">
    <p>
      We have not finished mapping all the possible MIDI instruments to the
      limited selection of Plasma instruments. Right now everything plays as
      Keys. We're planning on implementing this feature. Likewise, we have not
      mapped every drum sound to the available Plasma drum sounds. We plan on
      adding this too, but be warned that any MIDI file with drums will likely
      have some atonal nonsense happening on top of the song.
    </p>
    <p>
      There are limited song options. We have plans to have more songs
      pre-loaded on the server to expand the amount of music users have access
      to. We're exploring routes for implementing this functionality.
    </p>
    <p>
      The text is very large. It may take a while to paste into Plasma, and if
      things freeze up for a moment or two, that is to be expected. We are
      considering a method of compressing our data, as well as alternative
      delivery methods. No matter what, we will continue to optimize every
      aspect of plasMIDI.
    </p>
  </Section>
);

export default Limitations;
