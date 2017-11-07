module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  'rules': {
    'no-console': [
      'warn',
    ],
    'no-unused-vars': [
      'warn',
    ],
  },
}
