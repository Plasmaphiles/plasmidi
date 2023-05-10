import React, { useState } from "react";
import FileDrop from "../components/DragDrop";

const Home = () => {
  const [response, setResponse] = useState("");

  return (
    <div>
      <header className="bg-primary text-light text-center py-5">
        <h1>plasMIDI</h1>
      </header>

      <section className="container py-5">
        <h2 className="mb-4">File Drop</h2>
        <FileDrop setResponse={setResponse} />
      </section>

      <section className="container py-5">
        <h2 className="mb-4">Output</h2>
        <p>{response}</p>
      </section>

      <section className="container py-5">
        <h2 className="mb-4">About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum!
        </p>
      </section>
    </div>
  );
};

export default Home;
