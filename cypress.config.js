const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  viewportHeight: 720,
  viewportWidth: 1280,
  video: false,
  screenshotOnRunFailure: true,
});
