const {
  defineConfig
} = require("cypress");

module.exports = defineConfig({
  projectId: 'kw9wfh',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://timesindonesia.co.id',
    reporter: 'mochawesome',
    browser: 'chrome',
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportdir": "cypress/report/mochawesome-report",
      "overwrite": true,
      "html": true,
      "json": true,
      "timestampInFooter": true,
      "inline": true
    }
  },
});