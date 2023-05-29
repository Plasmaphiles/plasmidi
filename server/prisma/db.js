const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});

module.exports = { db };
