import React, { useState } from "react";
import FileDrop from "../components/FileDrop";

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

const CopyablePreview = ({ text }) => (
  <>
    <p style={{ display: "inline", paddingRight: "30px" }}>
      {text.substring(0, 40)}...
    </p>
    <button
      className="btn btn-secondary"
      onClick={() => navigator.clipboard.writeText(text)}>
      Copy to Clipboard
    </button>
  </>
);

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
