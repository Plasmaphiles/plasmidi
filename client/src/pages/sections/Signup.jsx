import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Section from "../../components/Section";

const Signup = () => {
  const [signupCreds, setSignupCreds] = useState({
    username: "",
    password: "",
    confirm: "",
  });

  const handleSignup = event => {
    event.preventDefault();
    console.table(signupCreds);

    if (signupCreds.password !== signupCreds.confirm)
      return alert("Password and Confirmation do not match.");

    setSignupCreds({ username: "", password: "", confirm: "" });
  };

  return (
    <Section title="Signup">
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formSignupUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            value={signupCreds.username}
            onChange={e =>
              setSignupCreds({ ...signupCreds, username: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={signupCreds.password}
            onChange={e =>
              setSignupCreds({ ...signupCreds, password: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignupConfirm">
          <Form.Label>Confirm</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={signupCreds.confirm}
            onChange={e =>
              setSignupCreds({ ...signupCreds, confirm: e.target.value })
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

export default Signup;
