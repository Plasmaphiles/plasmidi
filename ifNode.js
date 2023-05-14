const ifNode = text => (process.env.NODE_ENV ? text : "");

module.exports = { ifNode };
