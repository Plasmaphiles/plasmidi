const { exec } = require("child_process");
const fs = require("fs");

const sendResult = (res, cb) => (err, stdout) => {
  if (err) {
    console.error(`Error executing Python script: ${err}`);
    return res
      .status(500)
      .send("An error occurred while running the Python script.");
  }

  res.send({ msg: stdout });

  cb();
};

const runScript = (script, cb, ...args) =>
  exec(`python3 ${script} ${args.join(" ")}`, cb);

const deleteFileCB = file => () =>
  fs.unlink(file, err => {
    if (err) console.error(`Error deleting file: ${err}`);
  });

const processFile = (res, path) => {
  runScript(
    process.env.NODE_ENV
      ? "/app/server/scripts/plasmidi.py"
      : "../server/scripts/plasmidi.py",
    sendResult(res, deleteFileCB(path)),
    path
  );
};

module.exports = { processFile };
