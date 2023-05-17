import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Section from "../../components/Section";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({ username: "", password: "" });
  const handleLogin = event => {
    event.preventDefault();
    console.table(loginCreds);

    setLoginCreds({ username: "", password: "" });
  };

  return (
    <Section title="Login">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formLoginUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            value={loginCreds.username}
            onChange={e =>
              setLoginCreds({ ...loginCreds, username: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={loginCreds.password}
            onChange={e =>
              setLoginCreds({ ...loginCreds, password: e.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Section>
  );
};

export default Login;
