const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalOriginDependencies: true,
  },
});
