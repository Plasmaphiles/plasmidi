import { useState } from "react";
import { Button } from "react-bootstrap";
import copy from "../helpers/copy";

// String.prototype.strip = function(char) {
//   if (char) {

//   }
// }

const stripQuotes = text =>
  text[0] === '"' && text[text.length - 1] === '"'
    ? text.substring(1, text.length - 1)
    : text;

const CopyToClipboardButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyText = text => {
    try {
      text = stripQuotes(text);
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
