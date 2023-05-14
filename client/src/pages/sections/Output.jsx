import Track from "../../components/Track";
import Section from "../../components/Section";

const showMidi = plasMIDI =>
  plasMIDI.tracks.map(trk => <Track track={trk} key={trk.num} />);

const Output = ({ plasMIDI }) => (
  <Section title="Output">
    {plasMIDI ? showMidi(plasMIDI) : <p>Upload a file!</p>}
  </Section>
);

export default Output;
