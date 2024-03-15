const { Builder } = require('selenium-webdriver');

(async function runTests() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://demo.seleniumeasy.com/basic-first-form-demo.html');
    

  } finally {
    await driver.quit();
  }
})();
