import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Section from "../../components/Section";
import FormGroup from "../../components/FormGroup";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleLogin = () => {
    console.table(user);

    setUser({ username: "", password: "" });
  };

  FormGroup.defaultProps = { action: "login" };

  return (
    <Section title="Login">
      <Form>
        <FormGroup name="username" state={[user, setUser]} />
        <FormGroup name="password" state={[user, setUser]} />
        <Button onClick={handleLogin}>Submit</Button>
      </Form>
    </Section>
  );
};

export default Login;
