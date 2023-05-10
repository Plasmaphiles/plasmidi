import { Dropzone, FileMosaic } from "@files-ui/react";
import * as React from "react";

const FileDrop = ({ setResponse }) => {
  const [files, setFiles] = React.useState([]);

  const updateFiles = incomingFiles => {
    //do something with the files
    console.log("incoming files", incomingFiles);
    setFiles(incomingFiles);
    //even your own upload implementation
  };

  const removeFile = id => {
    setFiles(files.filter(x => x.id !== id));
  };

  const process = () => {
    if (files.length) {
      console.log("hitting endpoint...");
      fetch("/api/process")
        .then(res => res.json())
        .then(data => setResponse(data.msg));
    }
  };

  return (
    <>
      <Dropzone
        onChange={updateFiles}
        value={files}
        maxFiles={1}
        accept=".mid, .midi">
        {files.map(file => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
      </Dropzone>
      <div className="text-center" style={{ paddingTop: "10px" }}>
        <button className="btn btn-primary" onClick={process}>
          Process File
        </button>
      </div>
    </>
  );
};

export default FileDrop;
