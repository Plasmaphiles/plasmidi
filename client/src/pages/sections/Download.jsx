import DownloadButton from "../../components/DownloadButton";
import Section from "../../components/Section";

import plasmidi from "../../plasmidi.zip";

const Download = () => (
  <Section title="Download">
    <p>
      This site uses a Python script to convert the MIDI file to Plasma-usable
      text. We did this so users could also download the Python file to use
      locally! Here is that file.
    </p>
    <DownloadButton file={plasmidi} filename={"plasmidi.zip"} />
  </Section>
);

export default Download;
