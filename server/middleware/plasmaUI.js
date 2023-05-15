const fs = require("fs");
const { isProd } = require("../../isProd");

const plasmaUI = (req, res, next) => {
  const pagePath = `${isProd("server/", "./")}pages/${req.params.page}.json`;

  fs.readFile(pagePath, "utf8", (err, txt) => {
    res.status(err ? 500 : 200);
    req.plasmaUI = err ? "Error loading json" : JSON.parse(txt);

    next();
  });
};

module.exports = { plasmaUI };
