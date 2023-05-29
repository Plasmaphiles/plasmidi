const prismaErrorHandler = (res, code) => {
  console.log(`prisma threw code ${code}.`);
  if (!code) {
    return res.status(500).json({ error: "Internal Server Error." });
  }
  if (code === "P2002") {
    return res.status(400).json({ error: "Duplicate Key Error." });
  }

  if (code === "P2025") {
    return res.status(400).json({ error: "Id not found." });
  }
};

module.exports = prismaErrorHandler;
