const { Client } = require("node-appwrite");
const { Databases, ID, Storage } = require("node-appwrite");

// Init a client to share
const client = new Client()
  .setEndpoint(process.env.APPWRITE_URL) // Your API Endpoint
  .setProject(process.env.APPWRITE_PROJECT_ID) // Your project ID
  .setKey(process.env.APPWRITE_KEY); // Your secret API key

const database = new Databases(client);

const storage = new Storage(client);

module.exports = { database, storage, ID };
