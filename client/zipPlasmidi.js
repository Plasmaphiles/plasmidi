const fs = require("fs");
const archiver = require("archiver");

try {
  fs.unlinkSync("src/plasmidi.zip");
} catch (err) {
  if (err.code !== "ENOENT") throw err; // File not found is okay
}

const output = fs.createWriteStream("src/plasmidi.zip");
const archive = archiver("zip");

archive.pipe(output);
archive.directory("../server/scripts", false);
archive.finalize();

output.on("close", () => console.log("ZIP file created successfully."));
