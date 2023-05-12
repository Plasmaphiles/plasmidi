const copy = text => {
  return new Promise((resolve, reject) => {
    navigator.clipboard.writeText(text).then(resolve, reject).catch(reject);
  });
};

export default copy;
