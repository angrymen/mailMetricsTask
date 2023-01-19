/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

//litghthouse performance
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

//snapshot visual regression
const { initPlugin } = require("cypress-plugin-snapshots/plugin");

//delete file
const { removeDirectory } = require('cypress-delete-downloads-folder');

//switch config env
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    lighthouse: lighthouse(), // calling the function is important
  });

  on('task', { removeDirectory });
  
  const file = config.env.configFile || 'dev'

  getConfigurationByFile(file)
  initPlugin(on, config);
  return config;
};
