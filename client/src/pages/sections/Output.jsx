import Track from "../../components/Track";
import Section from "../../components/Section";

const Output = ({ response }) => (
  <Section title="Output">
    {response ? (
      response.midi.map(track => <Track track={track} key={track.num} />)
    ) : (
      <p>Upload a file</p>
    )}
  </Section>
);
export default Output;
