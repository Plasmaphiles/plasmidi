import { default as ClipboardButton } from "./CopyToClipboardButton";

// eslint-disable-next-line no-extend-native
String.prototype.map = function (map, d = "") {
  return this.split(d).map(map).join(d);
};

// eslint-disable-next-line no-extend-native
String.prototype.toTitleCase = function () {
  return this.map(
    word => word[0].toUpperCase() + word.substring(1).map(l => l.toLowerCase()),
    " "
  );
};

const Track = ({ track }) => (
  <div className="row align-items-center" style={{ paddingBottom: "10px" }}>
    <div className="col-3">
      <span>
        {track.name.toTitleCase()} {track.num}:
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
