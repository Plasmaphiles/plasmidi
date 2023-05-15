const fs = require("fs");
const { isProd } = require("../../isProd");

const handleMiddleware = (req, res, next) => (err, txt) => {
  res.status(err ? 500 : 200);
  req.plasmaUI = err ? "Error loading json" : JSON.parse(txt);

  next();
};

// Adds the requested json page to the req object as req.plasmaUI
const plasmaUI = (req, res, next) => {
  const pagePath = `${isProd("server/", "./")}pages/${req.params.page}.json`;

  fs.readFile(pagePath, "utf8", handleMiddleware(req, res, next));
};

module.exports = { plasmaUI };
