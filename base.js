const jsPlugin = require('@eslint/js')
const importXPlugin = require('eslint-plugin-import-x')
const prettierPlugin = require('eslint-plugin-prettier/recommended')
const importSortPlugin = require('eslint-plugin-simple-import-sort')
const { configs } = require('typescript-eslint')

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  jsPlugin.configs.recommended,
  ...configs.recommended,
  importXPlugin.flatConfigs.recommended,
  importXPlugin.flatConfigs.typescript,
  prettierPlugin,
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      'import-sort': importSortPlugin,
    },
    rules: {
      // ? eslint
      'no-console': ['warn', { allow: ['info', 'debug', 'error', 'warn', 'trace'] }],

      // ? prettier
      'prettier/prettier': [
        'warn',
        {
          printWidth: 128,
          semi: false,
          singleQuote: true,
        },
        {
          usePrettierrc: true,
        },
      ],

      // ? import-sort
      'import-sort/imports': 'warn',
      'import-sort/exports': 'warn',

      // ? import
      'import-x/export': 'warn',
      'import-x/first': 'warn',
      'import-x/newline-after-import': 'warn',
      'import-x/no-absolute-path': ['warn', { esmodule: true, commonjs: true, amd: false }],
      'import-x/no-duplicates': 'warn',
      'import-x/no-named-default': 'warn',
      'import-x/no-webpack-loader-syntax': 'warn',
    },
  },
]
