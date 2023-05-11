const Section = ({ title, children }) => (
  <section className="container py-5">
    <h2 className="mb-4">{title}</h2>
    {children}
  </section>
);

export default Section;
