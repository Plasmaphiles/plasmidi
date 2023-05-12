import { default as ClipboardButton } from "./CopyToClipboardButton";

const Track = ({ track }) => {
  track.name = track.name.match(/[a-zA-Z\s]+/)[0];
  track.notes = JSON.stringify(track.notes).replaceAll("\\", "");

  return (
    <div style={{ paddingBottom: "10px" }}>
      <span>
        {track.name} - {track.num}:
      </span>
      <code style={{ display: "inline", padding: "30px" }}>
        {track.notes.substring(1, 20) + "..."}
      </code>
      <ClipboardButton text={track.notes} />
      <br />
    </div>
  );
};

export default Track;
