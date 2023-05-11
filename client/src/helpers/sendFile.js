const sendFile = file => {
  const formData = new FormData();
  formData.append("file", file);

  const fetchOptions = {
    method: "POST",
    body: formData,
  };

  return fetch("/api/process", fetchOptions).then(res => {
    if (res.includes("error")) return console.error(res);
    res.json();
  });
};

module.exports = { sendFile };
