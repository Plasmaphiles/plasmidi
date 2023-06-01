const { createReadStream } = require("fs");

const { storage } = require("../db/client");
const { InputFile, ID } = require("node-appwrite");

const createFile = async ({ path, name }) => {
  const file = createReadStream(path);
  const result = await storage.createFile(
    "midi-files",
    ID.unique(),
    new InputFile(file, name, file.byteLength)
  );

  return result;
};

module.exports = { createFile };
