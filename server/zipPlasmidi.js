const fs = require("fs");
const archiver = require("archiver");

try {
  fs.unlinkSync("plasmidi.zip");
} catch (err) {
  // File doesn't exist, that's fine
}

const sourceFolder = "./scripts";
const zipFileName = "plasmidi.zip";

const output = fs.createWriteStream(zipFileName);
const archive = archiver("zip", {
  zlib: { level: 9 }, // Set compression level (optional)
});

archive.pipe(output);

archive.directory(sourceFolder, false);

archive.finalize();
output.on("close", () => {
  console.log("ZIP file created successfully.");
});
