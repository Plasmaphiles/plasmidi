const { exec } = require("child_process");
const fs = require("fs");
const { isNode, isProd } = require("../../isProd");

const getTitle = path =>
  path.split("/")[0] === "uploads" ? null : path.split("/")[1].split(".")[0];

const runScript = (script, cb, ...args) =>
  exec(`python3 ${script} ${args.join(" ")}`, cb);

const sendResultCB = (res, path, cb) => (err, stdout) => {
  if (err) {
    console.error(`Error executing Python script: ${err}`);
    return res
      .status(500)
      .send("An error occurred while running the Python script.");
  }

  res.status(200).send({
    plasMIDI: {
      tracks: JSON.parse(stdout),
      title: getTitle(path),
    },
  });

  cb();
};

const deleteFileCB = file => () =>
  fs.unlink(file, err => (err ? console.error(err) : null));

const plasmidiPath = isProd("/app/", "../") + "server/scripts/plasmidi.py";

const processMidi = (res, midiPath, delFile) =>
  runScript(
    plasmidiPath,
    sendResultCB(res, midiPath, delFile ? deleteFileCB(midiPath) : () => {}),
    midiPath
  );

module.exports = { processMidi };
