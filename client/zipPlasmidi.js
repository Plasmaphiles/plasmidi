const fs = require("fs");
const archiver = require("archiver");

const zipPath = "src/plasmidi.zip";

try {
  fs.unlinkSync(zipPath);
  console.log("Zip deleted successfully");
} catch (err) {
  if (err.code !== "ENOENT") throw err; // File not found is okay
}

const output = fs.createWriteStream(zipPath);
const archive = archiver("zip");

archive.pipe(output);
archive.directory("../server/scripts", false);
archive.finalize();

output.on("close", () => console.log("Zip file created successfully."));
