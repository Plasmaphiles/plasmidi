import { Form } from "react-bootstrap";

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const FormGroup = ({ action, name, type, state }) => {
  const [user, setUser] = state;
  return (
    <Form.Group
      className="mb-3"
      controlId={`form${capitalize(action)}${capitalize(name)}`}>
      <Form.Label>{capitalize(name)}</Form.Label>
      <Form.Control
        type={type ?? name}
        placeholder={name}
        value={user[name]}
        onChange={e => {
          user[name] = e.target.value;
          setUser(user);
        }}
      />
    </Form.Group>
  );
};

export default FormGroup;
