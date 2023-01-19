const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    "MAILOSAUR_API_KEY": "YXQZxkRpNxakCAam",
    "mailMetricsUrl": "https://www.mailmetrics.com/",
    "herokuApp":"http://the-internet.herokuapp.com/dynamic_content?with_content=static"
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  },  
  downloadsFolder: "./cypress/e2e/mailMetrics/__snapshots__",
  
  "cypress-plugin-snapshots": {
    "autoCleanUp": false,
    "autopassNewSnapshots": true,
    "diffLines": 3,
    "excludeFields": [],
    "ignoreExtraArrayItems": false,
    "ignoreExtraFields": false, 
    "normalizeJson": true,
    "prettier": true,
    "imageConfig": {
      "createDiffImage": true,
      "resizeDevicePixelRatio": true,
      "threshold": 0.01,
      "thresholdType": "percent"
    }},
  "includeShodowDom": true,
  "chromeWebSecurity": false,
  "defaultCommandTimeout": 10000,
  "viewportHeight": 1080,
  "viewportWidth": 1920,
  "video": false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
        }
      }
})