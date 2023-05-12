import { default as ClipboardButton } from "./CopyToClipboardButton";

const previewText = (text, limit = 30) => {
  switch (text[limit - 1]) {
    case ",":
      text = text.substring(1, limit);
      break;
    case '"':
      text = text.substring(1, limit - 1) + ",";
      break;
    default:
      text = text.substring(1, limit - 5) + '...",';
      break;
  }

  return `[${text} ... ]`;
};

const CopyablePreview = ({ text }) => {
  return (
    <>
      <code style={{ display: "inline", paddingRight: "30px" }}>
        {previewText(text)}
      </code>
      <ClipboardButton text={text} />
    </>
  );
};

export default CopyablePreview;
