import React, { useState } from "react";
import FileDrop from "../components/FileDrop";
import { downloadFile } from "../helpers/files";
import CopyablePreview from "../components/CopyablePreview";
import Header from "../components/Header";
import Section from "../components/Section";

const Home = () => {
  const [response, setResponse] = useState("");

  return (
    <div>
      <Header title="plasMIDI" />

      <Section title="File Upload">
        <FileDrop setResponse={setResponse} />
      </Section>

      <Section title="Output">
        {response && <CopyablePreview text={response} />}
      </Section>

      <Section title="How to Use">
        <p>Instructions go here.</p>
      </Section>

      <Section title="Download">
        <p>
          This site uses a Python script to convert the MIDI file to
          Plasma-usable text. We did this so users could also download the
          Python file to use locally! Here is that file.
        </p>
        <button onClick={downloadFile}>Download</button>
      </Section>

      <Section title="About">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum!
        </p>
      </Section>
    </div>
  );
};

export default Home;
