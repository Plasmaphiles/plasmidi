import download from "downloadjs";

import Section from "../../components/Section";

const downloadFile = async () => {
  const res = await fetch("/api/download");
  const blob = await res.blob();
  download(blob, "plasmidi.zip");
};

const Download = () => (
  <Section title="Download">
    <p>
      This site uses a Python script to convert the MIDI file to Plasma-usable
      text. We did this so users could also download the Python file to use
      locally! Here is that file.
    </p>
    <button className="btn btn-secondary" onClick={downloadFile}>
      Download
    </button>
  </Section>
);

export default Download;
