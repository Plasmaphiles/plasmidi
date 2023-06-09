const virtualLink = f => URL.createObjectURL(new Blob([f], { type: f.type }));

const sendFile = async file => {
  const formData = new FormData();
  formData.append("file", file);

  const options = {
    method: "POST",
    body: formData,
  };

  return fetch("/api/process", options).then(res => res.json());
};

const FileHelper = { virtualLink, sendFile };

export default FileHelper;
