const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: false,
    json: true,
    charts: true,
    reportPageTitle: "QA Coding Challenge - Cypress Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },

  video: false,
  screenshotOnRunFailure: true,
});
