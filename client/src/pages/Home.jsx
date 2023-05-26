import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import HowToUse from "./sections/HowToUse";
import Download from "./sections/Download";
import Samples from "./sections/Samples";
import Upload from "./sections/Upload";
import Output from "./sections/Output";
import About from "./sections/About";
import MidiPlayer from "../components/MidiPlayer";

import MH from "../helpers/plasmidi";
import Limitations from "./sections/Limitations";

const Home = () => {
  const [response, setResponse] = useState("");
  const [plasMIDI, setPlasMIDI] = useState("");
  const [midiFile, setMidiFile] = useState(null);

  useEffect(() => {
    if (response)
      setPlasMIDI({ tracks: response.plasMIDI.tracks.map(MH.parseTrack) });
  }, [response]);

  return (
    <>
      <Header>plasMIDI</Header>

      <Upload
        midiFile={midiFile}
        setMidiFile={setMidiFile}
        setResponse={setResponse}
      />
      <MidiPlayer midiFile={midiFile} />
      <Output plasMIDI={plasMIDI} />
      <Download />
      <HowToUse />
      <Limitations />
      <About />
      <Samples />

      <Footer>made by Leonardo1123 & SenorCluckens</Footer>
    </>
  );
};

export default Home;
