const fs = require("fs");

const sendPlasmaUIPage = (name, res) =>
  fs.readFile(`./pages/${name}.json`, "utf8", (err, txt) =>
    err
      ? res.status(500).send({ msg: "Error loading json" })
      : res.status(200).send({ page: JSON.parse(txt) })
  );

module.exports = { sendPlasmaUIPage };
