const { processFile } = require("./helpers/process");

const express = require("express");
const path = require("path");
const multer = require("multer");

const PORT = process.env.PORT || 3001;

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production")
  app.use(express.static(path.join(__dirname, "../client/build")));

// Home page render
app.get("/", (_req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// Process the MIDI file using plasmidi.py and return the result
app.post("/api/process", upload.single("file"), (req, res) => {
  processFile(res, `uploads/${req.file.filename}`);
});

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
