import { useState } from "react";
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
    <button className="btn btn-secondary" onClick={() => copyText(text)}>
      {copied ? "Copied!" : "Copy to Clipboard"}
    </button>
  );
};

export default CopyToClipboardButton;
