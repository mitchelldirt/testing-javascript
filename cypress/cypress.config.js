const {defineConfig} = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    viewportHeight: 900,
    viewportWidth: 400,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
