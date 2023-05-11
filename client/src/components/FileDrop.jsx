// https://www.npmjs.com/package/@dropzone-ui/react

import { Dropzone, FileMosaic } from "@files-ui/react";
import * as React from "react";

const FileDrop = ({ setResponse }) => {
  const [files, setFiles] = React.useState([]);

  const removeFile = id => setFiles(files.filter(x => x.id !== id));

  // Send the MIDI file to the server to be parsed by the Python and returned
  const process = () => {
    if (!files.length) return;

    const formData = new FormData();
    formData.append("file", files[0].file);

    console.log(files[0]);

    const fetchOptions = {
      method: "POST",
      body: formData,
    };

    console.log("hitting endpoint...");

    fetch("/api/process", fetchOptions)
      .then(res => res.json())
      .then(data => setResponse(data.msg));
  };

  const SubmitButton = () => (
    <div className="text-center" style={{ paddingTop: "10px" }}>
      <button className="btn btn-primary" onClick={process}>
        Process File
      </button>
    </div>
  );

  const dropzoneOptions = {
    onChange: setFiles,
    value: files,
    maxFiles: 1,
    accept: ".mid, .midi",
  };

  return (
    <>
      <Dropzone {...dropzoneOptions}>
        {files.map(file => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
      </Dropzone>

      <SubmitButton />
    </>
  );
};

export default FileDrop;
