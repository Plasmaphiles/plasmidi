import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Section from "../../components/Section";
import FormGroup from "../../components/FormGroup";

const Signup = () => {
  const blankUser = {
    username: "",
    password: "",
    confirm: "",
  };

  const [user, setUser] = useState({ ...blankUser });

  const handleSignup = () => {
    console.table(user);

    if (user.password !== user.confirm)
      return alert("Password and Confirmation do not match.");

    setUser({ ...blankUser });
  };

  return (
    <Section title="Signup" form={true}>
      <FormGroup action="Signup" title="Username">
        <Form.Control
          type="username"
          placeholder="username"
          value={user.username}
          onChange={e => setUser({ ...user, username: e.target.value })}
        />
      </FormGroup>
      <FormGroup action="Signup" title="Password">
        <Form.Control
          type="password"
          placeholder="password"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
        />
      </FormGroup>
      <FormGroup action="Signup" title="Confirm">
        <Form.Control
          type="password"
          placeholder="confirm"
          value={user.confirm}
          onChange={e => setUser({ ...user, confirm: e.target.value })}
        />
      </FormGroup>
      <Button onClick={handleSignup}>Submit</Button>
    </Section>
  );
};

export default Signup;
