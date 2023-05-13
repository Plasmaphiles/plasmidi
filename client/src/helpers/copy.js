// not working on www.plasmidi.com
const copy = text =>
  new Promise((resolve, reject) =>
    navigator.clipboard.writeText(text).then(resolve, reject).catch(reject)
  );

const CopyHelper = { copy };

export default CopyHelper;
