const { ESLint } = require('eslint')

test('JSX A11y', async () => {
  const cli = new ESLint({ overrideConfigFile: 'react.js' })
  const results = await cli.lintFiles(['test/plugins/jsx-a11y.js'])
  const issueCount = results.reduce((acc, result) => acc + result.errorCount + result.warningCount, 0)

  expect(issueCount).toBeGreaterThan(0)
})

test('React Hooks', async () => {
  const cli = new ESLint({ overrideConfigFile: 'react.js' })
  const results = await cli.lintFiles(['test/plugins/react-hooks.js'])
  const issueCount = results.reduce((acc, result) => acc + result.errorCount + result.warningCount, 0)
  expect(issueCount).toBeGreaterThan(0)
})