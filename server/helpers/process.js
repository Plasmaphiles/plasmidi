const { exec } = require("child_process");
const fs = require("fs");

const runScript = (script, cb, ...args) =>
  exec(`python3 ${script} ${args.join(" ")}`, cb);

const sendResultCB = (res, cb) => (err, stdout) => {
  if (err) {
    console.error(`Error executing Python script: ${err}`);
    return res
      .status(500)
      .send("An error occurred while running the Python script.");
  }

  res.status(200).send({ midi: JSON.parse(stdout) });

  cb();
};

const deleteFileCB = file => () =>
  fs.unlink(file, err => (err ? console.error(err) : null));

const plasmidiPath = process.env.NODE_ENV
  ? "/app/server/scripts/plasmidi.py"
  : "../server/scripts/plasmidi.py";

const processFile = (res, path) =>
  runScript(plasmidiPath, sendResultCB(res, deleteFileCB(path)), path);

module.exports = { processFile };
