const { exec } = require("child_process");
const { isProd } = require("../../isProd");

const plasmidiPath = isProd("/app/", "../") + "server/scripts/plasmidi.py";

const getTitle = path => {
  if (path.split("/")[0] === "uploads") return null;

  const bits = path.split("/");
  return bits[bits.length - 1].split(".")[0];
};

const runPython = (script, args = [], callback = () => {}) =>
  exec(`python3 ${script} ${args.join(" ")}`, callback);

const getMidiPath = req =>
  req.file
    ? `uploads/${req.file.filename}`
    : `${isProd("server/", "")}midi/${req.params.name}.mid`;

const handleMiddleware = (req, res, next) => (err, stdout) => {
  res.status(err ? 500 : 200);
  req.plasMIDI = err
    ? "Error generating plasMIDI."
    : {
        tracks: JSON.parse(stdout),
        title: getTitle(getMidiPath(req)),
      };

  next();
};

// Adds the requested plasMIDI to the req object as req.plasmaMIDI
const plasMIDI = (req, res, next) =>
  runPython(plasmidiPath, [getMidiPath(req)], handleMiddleware(req, res, next));

module.exports = { plasMIDI };
