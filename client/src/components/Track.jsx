import { default as ClipboardButton } from "./CopyToClipboardButton";

const titleCase = text =>
  text
    .split(" ")
    .map(
      word =>
        word[0].toUpperCase() +
        word
          .substring(1)
          .split("")
          .map(l => l.toLowerCase())
          .join("")
    )
    .join(" ");

const Track = ({ track }) => (
  <div className="row align-items-center" style={{ paddingBottom: "10px" }}>
    <div className="col-3">
      <span>
        {titleCase(track.name)} {track.num}:
      </span>
    </div>
    {/* <div className="col-3">
      <code style={{ display: "inline", padding: "30px" }}>
        {track.preview}
      </code>
    </div> */}
    <div className="col-3">
      <ClipboardButton text={track.notes} label="Copy Notes" />
    </div>
    <div className="col-3">
      <ClipboardButton text={track.notes_compressed} label="Copy Compressed" />
    </div>
    <div className="col-3">
      <ClipboardButton
        text={JSON.stringify(track.instruments)}
        label="Copy Instruments"
      />
    </div>
  </div>
);

export default Track;
