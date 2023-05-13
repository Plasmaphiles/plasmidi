import { useState } from "react";
import { Button } from "react-bootstrap";
import copy from "../helpers/copy";

const CopyToClipboardButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyText = text => {
    try {
      copy(text).then(() => setCopied(true));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Button variant="secondary" onClick={copyText.bind(null, text)}>
      {copied ? "Copied!" : "Copy to Clipboard"}
    </Button>
  );
};

export default CopyToClipboardButton;
