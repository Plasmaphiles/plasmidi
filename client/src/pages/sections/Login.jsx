import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Section from "../../components/Section";
import FormGroup from "../../components/FormGroup";

const Login = () => {
  const blankUser = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState({ ...blankUser });

  const handleLogin = () => {
    console.table(user);

    setUser({ ...blankUser });
  };

  return (
    <Section title="Login" form={true}>
      <FormGroup action="Login" title="Email">
        <Form.Control
          type="email"
          placeholder="email"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
        />
      </FormGroup>
      <FormGroup action="Login" title="Password">
        <Form.Control
          type="password"
          placeholder="password"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
        />
      </FormGroup>
      <Button onClick={handleLogin}>Submit</Button>
    </Section>
  );
};

export default Login;
