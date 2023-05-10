import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const formatSize = size => {
  let pow = 0;
  while (size > 1000) {
    size /= 1000;
    pow++;
  }

  return `${size}${["B", "KB", "MB", "GB", "TB"][pow]}`;
};

const DragDrop = () => {
  const [file, setFile] = useState(null);
  const handleChange = file => setFile(file);

  return (
    <>
      <FileUploader
        handleChange={handleChange}
        types={["mid", "midi"]}
        multiple={false}
      />
      <p> {file && `${file.name} - ${formatSize(file.size)}`}</p>
    </>
  );
};

export default DragDrop;
