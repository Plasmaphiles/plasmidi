const { db } = require("../prisma/db");

const addUser = (user) => db.user.create({ data: { ...user } });

const getUser = (id) => db.user.findUnique({ where: { id } });

module.exports = { addUser, getUser };
