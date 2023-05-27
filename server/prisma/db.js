const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient({
  datasources: { db: { url: process.env.MONGODB_URL } },
});

module.exports = { db };
