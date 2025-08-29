const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30_000,
  use: {
    baseURL: 'https://jsonplaceholder.typicode.com',
  },
  reporter: [['list'], ['html', { open: 'never' }]],
});
