import { Container, Form } from "react-bootstrap";

const Section = ({ title, children, form }) => (
  <Container className="py-5">
    <h2 className="mb-4">{title}</h2>
    {form ? <Form>{children}</Form> : children}
  </Container>
);

export default Section;
