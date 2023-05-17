import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Section from "../../components/Section";
import FormGroup from "../../components/FormGroup";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirm: "",
  });

  const handleSignup = () => {
    console.table(user);

    if (user.password !== user.confirm)
      return alert("Password and Confirmation do not match.");

    setUser({ username: "", password: "", confirm: "" });
  };

  FormGroup.defaultProps = { action: "signup" };

  return (
    <Section title="Signup">
      <Form>
        <FormGroup name="username" state={[user, setUser]} />
        <FormGroup name="password" state={[user, setUser]} />
        <FormGroup name="confirm" type="password" state={[user, setUser]} />
        <Button onClick={handleSignup}>Submit</Button>
      </Form>
    </Section>
  );
};

export default Signup;
