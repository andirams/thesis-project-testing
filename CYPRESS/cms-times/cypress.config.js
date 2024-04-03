const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kw9wfh',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://cms.times.co.id',
    reporter: 'mochawesome'
  },
});
