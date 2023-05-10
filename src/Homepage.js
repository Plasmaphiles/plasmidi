import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Homepage = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-dark text-white py-5">
        <div className="container">
          <h1>plasMIDI</h1>
        </div>
      </header>

      {/* Navigation */}
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
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Plasma
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <div className="container">
          <h2>Welcome to plasMIDI</h2>
          <p>A MIDI to Text Converter for Plasma</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
