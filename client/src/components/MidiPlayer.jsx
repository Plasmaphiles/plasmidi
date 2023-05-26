import { useEffect } from "react";
import { blobToNoteSequence } from "@magenta/music";

const MidiPlayer = (midiFile) => {
  useEffect(() => {
    if (!midiFile.midiFile) {
      return;
    }
    blobToNoteSequence(midiFile.midiFile).then((newNoteSeq) => {
      const midiPlayer = document.getElementById("midiPlayer");
      midiPlayer.noteSequence = newNoteSeq;
    });
  }, [midiFile]);

  return midiFile.midiFile ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <midi-player
        id="midiPlayer"
        noteSequence={null}
        visualizer="#myVisualizer"
      ></midi-player>
    </div>
  ) : null;
};

export default MidiPlayer;
