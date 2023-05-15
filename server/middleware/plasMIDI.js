const { exec } = require("child_process");
const { isProd } = require("../../isProd");

const getTitle = path => {
  if (path.split("/")[0] === "uploads") return null;

  const bits = path.split("/");
  return bits[bits.length - 1].split(".")[0];
};

const plasMIDI = (req, res, next) => {
  const plasmidiPath = isProd("/app/", "../") + "server/scripts/plasmidi.py";
  const midiPath = req.file
    ? `uploads/${req.file.filename}`
    : `${isProd("server/", "")}midi/${req.params.name}.mid`;

  exec(`python3 ${plasmidiPath} ${midiPath}`, (err, stdout) => {
    res.status(err ? 500 : 200);
    req.plasMIDI = err
      ? "Error generating plasMIDI."
      : {
          tracks: JSON.parse(stdout),
          title: getTitle(midiPath),
        };

    next();
  });
};

module.exports = { plasMIDI };
