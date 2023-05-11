import React, { useState } from "react";
import FileDrop from "../components/FileDrop";
import CopyablePreview from "../components/CopyablePreview";
import Header from "../components/Header";
import Section from "../components/Section";
import download from "downloadjs";
import Footer from "../components/Footer";

const downloadFile = async () => {
  const res = await fetch("/api/download");
  const blob = await res.blob();
  download(blob, "plasmidi.zip");
};

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
        <p>
          Upload a MIDI file and click the "Process file" button. After that,
          some text will appear in the output section. It will likely be
          shortened, as there tends to be a lot of text in the output, so click
          on the Copy to Clipboard button and then you can return to Plasma to
          paste that text into our music-playing device.
        </p>
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
          Plasma is an engineering sandbox game where you can create your own
          devices and worlds. Recently,they added the ability for you to create
          a variety of sounds large enough to be able to play real music in
          Plasma.
        </p>
        <p>
          Plasma, being an open sandbox, is not geared directly towards music
          creation, and even with this great new functionality, it would still
          be difficult to hand-transcibe music into a form workable in Plasma.
        </p>
        <p>
          That's where we come in. We made this tool to allow you to upload any
          MIDI file and get a text representation of the music in a formatted
          text format that's able to be further worked with in Plasma.
        </p>
        <p>
          In order to easily use this text format for music production, we've
          made our own device that is designed to play notes when given text in
          this format. You can find it by searching for it by ID in the Device
          Broswer window of Plasma. <b>ID: 112358132134</b>
        </p>
      </Section>

      <Footer text="made by Leonardo1123 & SenorCluckens" />
    </div>
  );
};

export default Home;
