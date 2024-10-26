const globals = require('globals')

const baseConfig = require('./base')

/** @type {import('eslint').Linter.Config[]} */
module.exports = [...baseConfig, { languageOptions: { globals: globals.node } }]
