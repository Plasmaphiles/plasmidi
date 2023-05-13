import Track from "../../components/Track";
import Section from "../../components/Section";

const getPreview = notes => {
  const preview = notes.substring(1, 20) + "...";

  // TODO: check Prod / Dev diff issue: bracket
  return preview[0] === "[" ? preview : "[" + preview;
};

const parseTrack = track => {
  const notes = JSON.stringify(track.notes).replaceAll("\\", "");

  return {
    ...track,
    notes,
    name: track.name.match(/[a-zA-Z\s.]+/)[0],
    preview: getPreview(notes),
  };
};

const Output = ({ response }) => (
  <Section title="Output">
    {response ? (
      response.midi.map(track => (
        <Track track={parseTrack(track)} key={track.num} />
      ))
    ) : (
      <p>Upload a file!</p>
    )}
  </Section>
);

export default Output;
