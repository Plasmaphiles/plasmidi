import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Upload from "./sections/Upload";
import Download from "./sections/Download";
import Output from "./sections/Output";
import HowToUse from "./sections/HowToUse";
import About from "./sections/About";
import Samples from "./sections/Samples";

const Home = () => {
  const [response, setResponse] = useState("");

  return (
    <div>
      <Header title="plasMIDI" />

      <Upload setResponse={setResponse} />
      <Output response={response} />
      <Download />
      <HowToUse />
      <About />
      <Samples />

      <Footer>made by Leonardo1123 & SenorCluckens</Footer>
    </div>
  );
};

export default Home;
