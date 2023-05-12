import Track from "../../components/Track";
import Section from "../../components/Section";

const Output = ({ response }) => {
  return (
    <Section title="Output">
      {response ? (
        response.midi.map(track => {
          return <Track track={track} key={track.num} />;
        })
      ) : (
        <p>Upload a file</p>
      )}
    </Section>
  );
};

export default Output;
