import Track from "../../components/Track";
import Section from "../../components/Section";

const showMidi = midi => midi.map(trk => <Track track={trk} key={trk.num} />);

const Output = ({ midi }) => (
  <Section title="Output">
    {midi ? showMidi(midi) : <p>Upload a file!</p>}
  </Section>
);

export default Output;
