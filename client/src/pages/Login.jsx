import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "./sections/Login";
import SignupForm from "./sections/Signup";

const Login = () => {
  return (
    <>
      <Header>plasMIDI</Header>

      <LoginForm />
      <SignupForm />

      <Footer>made by Leonardo1123 & SenorCluckens</Footer>
    </>
  );
};

export default Login;
