module.exports = {
  'extends': [
    './es6.js',
    'plugin:react/recommended',
  ],
  'plugins': [
    'react',
    'jsx-a11y',
  ],
  'rules': {
    'react/prop-types': [
      'warn',
    ],
    'react/no-unused-prop-types': [
      'warn',
    ],
    'react/no-unescaped-entities': [
      'off',
    ]
  },
}
