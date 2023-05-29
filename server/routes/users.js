const express = require("express");
const router = express.Router();

const prismaErrorHandler = require("../prisma/prismaErrorHandler");
const { addUser, getUser } = require("../services/users");

router.post("/", async (req, res) => {
  try {
    const user = await addUser(req.body);
    res.send(user);
  } catch ({ code }) {
    prismaErrorHandler(res, code);
  }
});

router.get("/:userId", async (req, res) => {
  const user = await getUser(req.params.userId);
  res.send(user);
});

module.exports = router;
