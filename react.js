module.exports = {
  'extends': [
    './es6.js',
    'plugin:react/recommended',
  ],
  'plugins': [
    'react',
  ],
  'rules': {
    'react/prop-types': [
      'warn',
    ],
    'react/no-unused-prop-types': [
      'warn',
    ]
  },
}
