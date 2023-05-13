import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import HowToUse from "./sections/HowToUse";
import Download from "./sections/Download";
import Samples from "./sections/Samples";
import Upload from "./sections/Upload";
import Output from "./sections/Output";
import About from "./sections/About";

import MH from "../helpers/midi";

const Home = () => {
  const [response, setResponse] = useState("");
  const [midi, setMidi] = useState("");

  useEffect(() => {
    if (!response) return;
    setMidi(response.midi.map(MH.parseTrack));
  }, [response]);

  return (
    <>
      <Header>plasMIDI</Header>

      <Upload setResponse={setResponse} />
      <Output midi={midi} />
      <Download />
      <HowToUse />
      <About />
      <Samples />

      <Footer>made by Leonardo1123 & SenorCluckens</Footer>
    </>
  );
};

export default Home;
