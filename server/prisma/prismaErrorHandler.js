const prismaErrorHandler = (res, code) => {
  if (!code) {
    return res.status(500).json({ error: "Internal Server Error." });
  }
  if (code === "P2002") {
    return res.status(400).json({ error: "Duplicate Key Error." });
  }
};

module.exports = prismaErrorHandler;
