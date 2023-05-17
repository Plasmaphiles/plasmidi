import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Home = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirm, setSignupConfirm] = useState("");

  const handleLogin = event => {
    event.preventDefault();
    // Perform login logic using the loginUsername and loginPassword state values
    console.log("Login username:", loginUsername);
    console.log("Login password:", loginPassword);
    // Reset the form fields
    setLoginUsername("");
    setLoginPassword("");
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Perform signup logic using the signupUsername, signupPassword, and signupConfirm state values
    console.log("Signup username:", signupUsername);
    console.log("Signup password:", signupPassword);
    console.log("Signup confirm:", signupConfirm);
    // Reset the form fields
    setSignupUsername("");
    setSignupPassword("");
    setSignupConfirm("");
  };

  return (
    <>
      <Header>plasMIDI</Header>

      <Section title="Login">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formLoginUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter username"
              value={loginUsername}
              onChange={e => setLoginUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLoginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={e => setLoginPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Section>
      <Section title="Signup">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formSignuprUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter username"
              value={signupUsername}
              onChange={e => setSignupUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSignuprPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={e => setSignupPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSignuprConfirm">
            <Form.Label>Confirm</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={signupConfirm}
              onChange={e => setSignupConfirm(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Section>

      <Footer>made by Leonardo1123 & SenorCluckens</Footer>
    </>
  );
};

export default Home;
