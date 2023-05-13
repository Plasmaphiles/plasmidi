import { default as ClipboardButton } from "./CopyToClipboardButton";

const Track = ({ track }) => (
  <div className="row align-items-center" style={{ paddingBottom: "10px" }}>
    <div className="col-3">
      <span>
        {track.name} - {track.num}:
      </span>
    </div>
    <div className="col-4">
      <code style={{ display: "inline", padding: "30px" }}>
        {track.preview}
      </code>
    </div>
    <div className="col-4">
      <ClipboardButton text={track.notes} />
    </div>
  </div>
);

export default Track;
