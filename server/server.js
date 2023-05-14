const { processMidi } = require("./helpers/process");

const express = require("express");
const multer = require("multer");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production")
  app.use(express.static(path.join(__dirname, "../client/build")));

// Home page render
app.get("/", (_req, res) =>
  res.status(200).sendFile(path.join(__dirname, "../client/build/index.html"))
);

// Serve the plasMIDI from a pre-hosted MIDI file
app.get("/api/process/:name", (req, res) => {
  processMidi(res, `midi/${req.params.name}.mid`);
});

// Process the MIDI file using plasmidi.py and return the result
app.post("/api/process", upload.single("file"), (req, res) =>
  processMidi(res, `uploads/${req.file.filename}`, true)
);

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
