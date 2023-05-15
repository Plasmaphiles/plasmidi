const fs = require("fs");
const { isProd } = require("../../isProd");

const sendPlasmaUIPage = (name, res) =>
  fs.readFile(
    `${isProd("app/server/", "./")}pages/${name}.json`,
    "utf8",
    (err, txt) =>
      err
        ? res.status(500).send({ msg: "Error loading json" })
        : res.status(200).send({ page: JSON.parse(txt) })
  );

module.exports = { sendPlasmaUIPage };
