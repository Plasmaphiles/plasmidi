import React, { useState } from "react";
import FileDrop from "../components/DragDrop";

const Section = ({ title, children }) => (
  <section className="container py-5">
    <h2 className="mb-4">{title}</h2>
    {children}
  </section>
);

const Home = () => {
  const [response, setResponse] = useState("");

  return (
    <div>
      <header className="bg-primary text-light text-center py-5">
        <h1>plasMIDI</h1>
      </header>

      <Section title="File Upload">
        <FileDrop setResponse={setResponse} />
      </Section>

      <Section title="Output">
        <p>{response}</p>
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
