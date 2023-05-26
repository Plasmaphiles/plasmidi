import FileDrop from "../../components/FileDrop";
import Section from "../../components/Section";

const Upload = ({ setResponse, midiFile, setMidiFile }) => (
  <Section title="File Upload">
    <FileDrop
      midiFile={midiFile}
      setMidiFile={setMidiFile}
      setResponse={setResponse}
    />
  </Section>
);

export default Upload;
