import { Form } from "react-bootstrap";

const FormGroup = props => {
  return (
    <Form.Group
      className="mb-3"
      controlId={`form${props.action}${props.title}`}>
      <Form.Label>{props.title}</Form.Label>
      {props.children}
    </Form.Group>
  );
};

export default FormGroup;
