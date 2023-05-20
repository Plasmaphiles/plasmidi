import Section from "../../components/Section";

const HowToUse = () => (
  <Section title="How to Use">
    <p>
      Upload a MIDI file and click the "Process file" button. After that, you'll
      see all the different MIDI tracks and are able to copy the plasMIDI data
      to your clipboard. When using the Jukebox, you'll want to grab the "ALL"
      track (num=-1) and paste that in the Track property of the _Main
      controller of the Jukebox.
    </p>
    <p>
      We've made two devices designed to help use plasMIDI. The Browser is
      something we hope to expand to have more songs, to streamline the process
      of playing music in game. And to save you from having to do all of the
      wiring yourself, we made a Jukebox to process and play the plasMIDI data
      through speakers. <br />
      Browser: <b>ID: 2978051808</b> <br />
      Jukebox: <b>ID: 2978036963</b> <br />
    </p>
  </Section>
);

export default HowToUse;
