const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports', // Diretório onde os relatórios serão salvos
    overwrite: false, // Não sobrescreve relatórios anteriores
    html: true, // Gera relatório HTML
    json: true, // Gera relatório JSON
    charts: true, // Inclui gráficos no relatório HTML
    reportFilename: 'report.html', // Nome do arquivo de relatório HTML
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
