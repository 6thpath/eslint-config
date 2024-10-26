const globals = require('globals')

const baseConfig = require('./base')

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  ...baseConfig,
  {
    languageOptions: {
      globals: globals.commonjs,
    },
    rules: {
      // ? typescript-eslint
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]
