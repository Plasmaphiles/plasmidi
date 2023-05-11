const sendFile = file => {
  const formData = new FormData();
  formData.append("file", file);

  const fetchOptions = {
    method: "POST",
    body: formData,
  };

  return fetch("/api/process", fetchOptions).then(res => res.json());
};

module.exports = { sendFile };
