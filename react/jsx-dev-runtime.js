const { jsxFactory } = require('./jsx-factory')
module.exports = require('raw-react/jsx-dev-runtime')
module.exports.jsxDEV = jsxFactory(module.exports.jsxDEV)