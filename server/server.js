const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

const { exec } = require("child_process");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// const pythonCommand = "python3 test.py"
const pythonCommand = "python3 ../plasmidi.py ../midi/Simple-Scale.mid 1";

app.post("/api/process", (req, res) => {
  exec(pythonCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error}`);
      return res
        .status(500)
        .send("An error occurred while running the Python script.");
    }

    res.send({
      msg: `Python script executed successfully with output: ${stdout}`,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
