const fs = require("fs");
const archiver = require("archiver");
const { isProd } = require("../isProd");

const deleteFile = path => {
  try {
    fs.unlinkSync(path);
    console.log("Zip deleted successfully.");
  } catch (err) {
    if (err.code !== "ENOENT") throw err; // File not found is okay
  }
};

const createZip = (zipPath, dirPath) => {
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip");

  archive.pipe(output);
  archive.directory(dirPath, false);
  archive.finalize();

  output.on("close", () => console.log("Zip file created successfully."));
};

const zipPath = isProd("", "client") + "src/plasmidi.zip";

deleteFile(zipPath);
createZip(zipPath, "../server/scripts");
