const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://catfact.ninja',
    specPattern:'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
  }
});