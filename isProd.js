const isProd = (tText, fText) => (process.env.NODE_ENV ? tText : fText);

module.exports = { isProd };
