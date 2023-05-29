const { db } = require("../prisma/db");

const addUser = (user) => {
  return db.user.create({ data: { ...user } });
};

const getUser = (id) => db.user.findUniqueOrThrow({ where: { id: parseInt(id) } });

module.exports = { addUser, getUser };
