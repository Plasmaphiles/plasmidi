import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Upload from "./sections/Upload";
import Output from "./sections/Output";
import HowToUse from "./sections/HowToUse";
import About from "./sections/About";

const Home = () => {
  const [response, setResponse] = useState("");

  return (
    <div>
      <Header title="plasMIDI" />

      <Upload setResponse={setResponse} />
      <Output response={response} />
      <HowToUse />
      <About />

      <Footer text="made by Leonardo1123 & SenorCluckens" />
    </div>
  );
};

export default Home;
