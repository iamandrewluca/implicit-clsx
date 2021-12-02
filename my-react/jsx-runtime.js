const { jsxFactory } = require('./jsx-factory')
module.exports = require('raw-react/jsx-runtime')
module.exports.jsx = jsxFactory(module.exports.jsx)
module.exports.jsxs = jsxFactory(module.exports.jsxs)