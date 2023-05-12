import CopyablePreview from "../../components/CopyablePreview";
import Section from "../../components/Section";

const Output = ({ response }) => (
  <Section title="Output">
    {response ? <CopyablePreview text={response} /> : <p>Upload a file!</p>}
  </Section>
);

export default Output;
