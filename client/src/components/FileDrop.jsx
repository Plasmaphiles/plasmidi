import { useState } from "react";
import { Button } from "react-bootstrap";
import { Dropzone, FileMosaic } from "@files-ui/react";
import ReactMidiPlayer from "react-midi-player";

import { sendFile, virtualLink } from "../helpers/files";

const FileDrop = ({ setResponse = () => {} }) => {
  const [dropFiles, setDropFiles] = useState([]);
  const [midiFile, setMidiFile] = useState(null);

  // Send the MIDI file to the server to be parsed by the Python and returned
  const process = () => sendFile(midiFile).then(setResponse);

  const SubmitButton = () => (
    <div
      className="text-center"
      style={{
        paddingLeft: "10px",
        bottom: "13px",
        position: "relative",
        display: "inline-block",
      }}>
      <Button variant="primary" onClick={process}>
        Process File
      </Button>
    </div>
  );

  const removeFile = () => {
    setDropFiles([]);
    setMidiFile(null);
  };

  const handleUpload = files => {
    setDropFiles(files);
    setMidiFile(files[0].file);
  };

  const dropzoneOptions = {
    onChange: handleUpload,
    value: dropFiles,
    maxFiles: 1,
    accept: ".mid, .midi",
  };

  return (
    <>
      <Dropzone {...dropzoneOptions}>
        {dropFiles.map(file => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
      </Dropzone>

      {midiFile && (
        <div style={{ paddingTop: "10px" }}>
          {/* FIXME: Re-renders on process() call */}
          <ReactMidiPlayer src={virtualLink(midiFile)} />
          <SubmitButton />
        </div>
      )}
    </>
  );
};

export default FileDrop;
