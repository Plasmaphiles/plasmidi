import { default as ClipboardButton } from "./CopyToClipboardButton";

const Track = ({ track }) => {
  track.name = track.name.match(/[a-zA-Z\s]+/)[0];
  track.notes = JSON.stringify(track.notes).replaceAll("\\", "");

  // FIXME: this is hacky as shit
  let preview = track.notes.substring(1, 20) + "...";
  if (preview[0] !== "[") preview = "[" + preview;

  return (
    <div style={{ paddingBottom: "10px" }}>
      <span>
        {track.name} - {track.num}:
      </span>
      <code style={{ display: "inline", padding: "30px" }}>{preview}</code>
      <ClipboardButton text={track.notes} />
      <br />
    </div>
  );
};

export default Track;
