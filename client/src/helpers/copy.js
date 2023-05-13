const copy = text =>
  new Promise(
    (resolve, reject) =>
      navigator.clipboard.writeText(text).then(resolve, reject).catch(reject) // not working on heroku?
  );

export default copy;
