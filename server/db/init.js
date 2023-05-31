const { client } = require("./client");
const { Databases, ID } = require("node-appwrite");

const databases = new Databases(client);

const init = databases.create(ID.unique(), "plasmidi"); // this is a promise

module.exports = { init };
