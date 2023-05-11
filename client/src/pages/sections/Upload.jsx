import FileDrop from "../../components/FileDrop";
import Section from "../../components/Section";

const Upload = ({ setResponse }) => (
  <Section title="File Upload">
    <FileDrop setResponse={setResponse} />
  </Section>
);

export default Upload;
