// TODO: Fix footer styling so it's always at the bottom of the page
const Footer = ({ children }) => (
  <footer className="bg-primary text-light text-center py-3">
    <h5 className="mb-0">{children}</h5>
  </footer>
);

export default Footer;
