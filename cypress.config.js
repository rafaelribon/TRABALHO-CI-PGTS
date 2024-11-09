const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports', // Diretório onde os relatórios serão salvos
    overwrite: false, // Não sobrescreve relatórios anteriores
    html: true,
    json: true,
    charts: true,
    reportFilename: 'report.html',
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
