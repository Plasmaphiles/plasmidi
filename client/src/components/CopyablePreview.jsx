import { useState } from "react";

const previewText = (text, limit = 30) => {
  if (text[limit - 1] === '"') text = `${text.substring(0, limit)}, ... ]`;
  else text = `${text.substring(0, limit - 4)}...", ... ]`;

  return text;
};

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
