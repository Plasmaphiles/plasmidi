import { useState } from "react";
import { Button } from "react-bootstrap";
import { Dropzone, FileMosaic } from "@files-ui/react";

import FH from "../helpers/file";

const FileDrop = ({ setResponse = () => {}, midiFile, setMidiFile }) => {
  const [dropFiles, setDropFiles] = useState([]);

  // Send the MIDI file to the server to be parsed by the Python and returned
  const process = () => FH.sendFile(midiFile).then(setResponse);

  const SubmitButton = () => (
    <div className="text-center" style={{ paddingTop: "10px" }}>
      <Button variant="primary" onClick={process}>
        Process File
      </Button>
    </div>
  );

  const removeFile = () => {
    setDropFiles([]);
    setMidiFile(null);
  };

  const handleUpload = (files) => {
    setDropFiles(files);
    setMidiFile(files[0] ? files[0].file : null);
  };

  const dropzoneOptions = {
    onChange: handleUpload,
    value: dropFiles,
    maxFiles: 1,
    accept: ".mid, .midi, .MID, .MIDI",
  };

  return (
    <>
      <Dropzone {...dropzoneOptions}>
        {dropFiles.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
      </Dropzone>

      {midiFile && <SubmitButton />}
      {/* FIXME: Re-renders on process() call */}
      {/* FIXME: And throws runtime errors */}
      {/* <ReactMidiPlayer src={FH.virtualLink(midiFile)} /> */}
    </>
  );
};

export default FileDrop;
