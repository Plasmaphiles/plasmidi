// https://www.npmjs.com/package/@dropzone-ui/react

import { Dropzone, FileMosaic } from "@files-ui/react";
import { useState } from "react";
import ReactMidiPlayer from "react-midi-player";

const virtualLink = f => URL.createObjectURL(new Blob([f], { type: f.type }));

const sendFile = file => {
  const formData = new FormData();
  formData.append("file", file);

  const fetchOptions = {
    method: "POST",
    body: formData,
  };

  return fetch("/api/process", fetchOptions).then(res => res.json());
};

const FileDrop = ({ setResponse }) => {
  const [dropFiles, setDropFiles] = useState([]);
  const [midiFile, setMidiFile] = useState(null);

  const removeFile = () => {
    setDropFiles([]);
    setMidiFile(null);
  };

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
      <button className="btn btn-primary" onClick={process}>
        Process File
      </button>
    </div>
  );

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
          <ReactMidiPlayer src={virtualLink(midiFile)} />
          <SubmitButton />
        </div>
      )}
    </>
  );
};

export default FileDrop;
