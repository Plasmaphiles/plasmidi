import { useState } from "react";
import { Button } from "react-bootstrap";
import copy from "../helpers/copy";

const CopyToClipboardButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyText = text => {
    try {
      // FIXME: fix this hacky shit
      if (text[0] === '"' && text[text.length - 1] === '"')
        text = text.substring(1, text.length - 1);
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
