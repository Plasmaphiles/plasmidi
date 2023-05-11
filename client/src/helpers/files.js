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

const previewText = (text, limit = 30) => {
  if (text[limit - 1] === '"') text = `${text.substring(0, limit)}, ... ]`;
  else text = `${text.substring(0, limit - 4)}...", ... ]`;

  return text;
};

const downloadFile = async () => {
  const res = await fetch("/api/download");
  const blob = await res.blob();
  download(blob, "plasmidi.zip");
};

module.exports = { sendFile, previewText, downloadFile };
