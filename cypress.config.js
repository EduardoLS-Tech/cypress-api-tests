const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dummyjson.com",
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.cy.js",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // Node event handlers (reporters, etc.) can be added here later.
      return config;
    },
  },
});
