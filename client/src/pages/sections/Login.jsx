import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Section from "../../components/Section";
import FormGroup from "../../components/FormGroup";

const Login = () => {
  const blankUser = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState({ ...blankUser });

  const handleLogin = () => {
    console.table(user);

    setUser({ ...blankUser });
  };

  return (
    <Section title="Login" form={true}>
      <FormGroup action="Login" title="Username">
        <Form.Control
          type="username"
          placeholder="username"
          value={user.username}
          onChange={e => setUser({ ...user, username: e.target.value })}
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
