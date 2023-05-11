import React, { useState } from "react";
import FileDrop from "../components/FileDrop";
import download from "downloadjs";

const previewText = (text, limit = 30) => {
  if (text[limit - 1] === '"') text = `${text.substring(0, limit)}, ... ]`;
  else text = `${text.substring(0, limit - 4)}...", ... ]`;

  return text;
};

const Header = ({ title }) => (
  <header className="bg-primary text-light text-center py-5">
    <h1>{title}</h1>
  </header>
);

const Section = ({ title, children }) => (
  <section className="container py-5">
    <h2 className="mb-4">{title}</h2>
    {children}
  </section>
);

const CopyablePreview = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyText = text => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <>
      <code style={{ display: "inline", paddingRight: "30px" }}>
        {previewText(text)}
      </code>
      <button className="btn btn-secondary" onClick={() => copyText(text)}>
        {copied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </>
  );
};

const Home = () => {
  const [response, setResponse] = useState("");

  const downloadFile = async () => {
    const res = await fetch("/api/download");
    const blob = await res.blob();
    download(blob, "plasmidi.zip");
  };

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
