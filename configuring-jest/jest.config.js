const path = require('path')

module.exports = {
  snapshotSerializers: ['jest-emotion'],
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect.js'],
}
