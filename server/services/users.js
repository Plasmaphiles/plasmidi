const { db } = require("../prisma/db");

const addUser = (user) => {
  return db.user.create({ data: { ...user } });
};

const getUser = (id) =>
  db.user.findUniqueOrThrow({ where: { id: parseInt(id) } });

const addFile = ({ user_id, name }) => {
  return db.song.create({ data: { user: { connect: { id: user_id } }, name } });
};

module.exports = { addUser, getUser, addFile };
