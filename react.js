module.exports = {
  'extends': [
    './es6.js',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
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
  'settings': {
    'react': {
      'version': 'detect',
    },
    'linkComponents': [
      {'name': 'Link', 'linkAttribute': 'to'},
    ],
    'propWrapperFunctions': [ 'exact' ],
  }
}
