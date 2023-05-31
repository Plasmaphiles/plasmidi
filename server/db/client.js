const { Client } = require("node-appwrite");

// Init a client to share
const client = new Client()
  .setEndpoint(process.env.APPWRITE_URL) // Your API Endpoint
  .setProject(process.env.APPWRITE_PROJECT_ID) // Your project ID
  .setKey(process.env.APPWRITE_KEY); // Your secret API key

module.exports = { client };
