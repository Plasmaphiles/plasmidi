const download = require("downloadjs");

const sendFile = file => {
  const formData = new FormData();
  formData.append("file", file);

  const fetchOptions = {
    method: "POST",
    body: formData,
  };

  return fetch("/api/process", fetchOptions).then(res => res.json());
};

const downloadFile = async () => {
  const res = await fetch("/api/download");
  const blob = await res.blob();
  download(blob, "plasmidi.zip");
};

module.exports = { sendFile, downloadFile };
