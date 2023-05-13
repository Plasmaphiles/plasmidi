import Track from "../../components/Track";
import Section from "../../components/Section";

import MH from "../../helpers/midi";

const Output = ({ response }) => (
  <Section title="Output">
    {response ? (
      response.midi.map(track => (
        <Track track={MH.parseTrack(track)} key={track.num} />
      ))
    ) : (
      <p>Upload a file!</p>
    )}
  </Section>
);

export default Output;
