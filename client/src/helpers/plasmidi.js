const getPreview = notes => {
  const preview = notes.substring(1, 20) + "...";

  // TODO: check Prod / Dev diff issue: bracket
  return preview[0] === "[" ? preview : "[" + preview;
};

const parseTrack = track => {
  const notes = JSON.stringify(track.notes).replaceAll("\\", "");

  return {
    ...track,
    notes,
    preview: getPreview(notes),
  };
};

const PlasMIDIHelper = { parseTrack };

export default PlasMIDIHelper;
