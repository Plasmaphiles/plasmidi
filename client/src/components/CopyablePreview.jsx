import { useState } from "react";
import { previewText } from "../helpers/files";

const CopyablePreview = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyText = text => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <>
      <code style={{ display: "inline", paddingRight: "30px" }}>
        {previewText(text)}
      </code>
      <button className="btn btn-secondary" onClick={() => copyText(text)}>
        {copied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </>
  );
};

export default CopyablePreview;
