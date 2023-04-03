const { ESLint } = require('eslint')

// Basic sanity checks to make sure there are no syntax errors in the configs

async function runConfig (config) {
  const cli = new ESLint({ overrideConfigFile: `${config}.js`})
  return cli.lintFiles(['test/test-input.js'])
}

test('index', async () => runConfig('index'))
test('base', async () => runConfig('base'))
test('es6', async () => runConfig('es6'))
test('react', async () => runConfig('react'))
test('react-rails', async () => runConfig('react-rails'))