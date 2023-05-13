import { useState } from "react";
import { Button } from "react-bootstrap";

import CH from "../helpers/copy";

// eslint-disable-next-line no-extend-native
String.prototype.strip = function (char) {
  if (char) {
    let newString = this.toString();

    if (newString[0] === char)
      newString = newString.substring(1, newString.length);

    if (newString[newString.length - 1] === char)
      newString = newString.substring(0, newString.length - 1);

    return newString.toString();
  }

  return this.trim();
};

const CopyToClipboardButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyText = text => {
    try {
      // TODO: check Prod / Dev diff issue: quotes
      CH.copy(text.strip('"')).then(() => setCopied(true));
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
