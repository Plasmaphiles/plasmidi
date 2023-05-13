import { Button } from "react-bootstrap";

const DownloadButton = ({ file, filename }) => (
  <Button
    variant="secondary"
    href={file}
    download={filename}
    style={{ margin: "10px", display: "inline-block" }}>
    {filename}
  </Button>
);

export default DownloadButton;
