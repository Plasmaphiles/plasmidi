import { Container } from "react-bootstrap";

const Section = ({ title, children }) => (
  <Container className="py-5">
    <h2 className="mb-4">{title}</h2>
    {children}
  </Container>
);

export default Section;
