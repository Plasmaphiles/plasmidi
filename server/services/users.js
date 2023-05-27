const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.MONGODB_URL } },
});

const addUser = (user) => prisma.user.create({ data: { ...user } });

const getUser = (id) => prisma.user.findUnique({ where: { id } });

module.exports = { addUser, getUser };
