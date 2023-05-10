import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DragDrop from "./components/DragDrop";

const NavLink = ({ name, loc = "/" }) => (
  <li className="nav-item">
    <a className="nav-link" href={loc}>
      {name}
    </a>
  </li>
);

const Header = () => (
  <header className="bg-dark text-white py-5">
    <div className="container">
      <h1>plasMIDI</h1>
    </div>
  </header>
);

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <NavLink name="About" />
          <NavLink name="Plasma" />
          <NavLink name="Contact" />
        </ul>
      </div>
    </div>
  </nav>
);

const Main = () => (
  <main>
    <div className="container">
      <h2>Welcome to plasMIDI</h2>
      <p>A MIDI to Text Converter for Plasma</p>
      <DragDrop />
      <button className="btn btn-primary">Process</button>
    </div>
  </main>
);

const Homepage = () => (
  <>
    <Header />

    <NavBar />

    <Main />
  </>
);

export default Homepage;
