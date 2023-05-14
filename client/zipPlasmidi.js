const fs = require("fs");
const archiver = require("archiver");

const deleteFile = path => {
  try {
    console.log(process.env.NODE_ENV);
    fs.unlinkSync(path);
    console.log("Zip deleted successfully.");
  } catch (err) {
    console.log("error");
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

const zipPath = "client/src/plasmidi.zip";

deleteFile(zipPath);
createZip(zipPath, "../server/scripts");
