import { default as ClipboardButton } from "./CopyToClipboardButton";

const Track = ({ track }) => {
  track.name = track.name.match(/[a-zA-Z\s.]+/)[0];
  track.notes = JSON.stringify(track.notes).replaceAll("\\", "");

  let preview = track.notes.substring(1, 20) + "...";
  if (preview[0] !== "[") preview = "[" + preview; // FIXME: this is hacky as shit

  return (
    <div className="row align-items-center" style={{ paddingBottom: "10px" }}>
      <div className="col-3">
        <span>
          {track.name} - {track.num}:
        </span>
      </div>
      <div className="col-4">
        <code style={{ display: "inline", padding: "30px" }}>{preview}</code>
      </div>
      <div className="col-4">
        <ClipboardButton text={track.notes} />
      </div>
    </div>
  );
};

export default Track;
