'use strict'

const { configure, presets } = require('eslint-kit')

module.exports = configure({
  allowDebug: process.env.NODE_ENV !== 'production',
  mode: 'only-errors',
  presets: [
    presets.imports({
      sort: {
        newline: true,
      },
    }),
    presets.node(),
    presets.typescript({
      tsconfig: './tsconfig.json',
    }),
    presets.prettier(),
    presets.nextJs(),
    presets.react({
      version: '18',
      newJSXTransform: true,
    }),
  ],

  extend: {
    rules: {
      'max-len': ['error', { code: 100, ignoreStrings: true }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      'no-useless-escape': 'off',
      'no-console': 'error',
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    },
  },
})
