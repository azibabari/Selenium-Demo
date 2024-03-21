// step_definitions.js

const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const BootstrapAlertPage = require('../../bootstrap_alert_page.js');

let driver;
let openPage;


Given('I am on the Bootstrap Alerts page', { timeout: 120000 }, async () =>{
  driver = new Builder().forBrowser('chrome').build();
  openPage = new BootstrapAlertPage(driver);
  await openPage.openURL();
  await openPage.clickAlertsandModals();
  await openPage.clickBootstrapAlerts();
});
       
When('I click on all alert buttons', async () => {
  await openPage.clickAutocloseableSuccessMessage();
  await openPage.clickNormalSuccessMessage();
  await openPage.clickAutocloseableWarningMessage();
  await openPage.clickNormalWarningMessage();
  await openPage.clickAutocloseableDangerMessage();
  await openPage.clickNormalDangerMessage();
  await openPage.clickAutocloseableInfoMessage();
  await openPage.clickNormalInfoMessage();
});
       

Then('all alerts should appear with the correct messages', async () =>{
  const alertXPaths = [
    "/html/body/div[2]/div/div[2]/div/div[2]/div[1]",
    "/html/body/div[2]/div/div[2]/div/div[2]/div[2]",
    "/html/body/div[2]/div/div[2]/div/div[2]/div[3]",
    "/html/body/div[2]/div/div[2]/div/div[2]/div[4]",
    "/html/body/div[2]/div/div[2]/div/div[2]/div[5]",
    "/html/body/div[2]/div/div[2]/div/div[2]/div[6]",
    "/html/body/div[2]/div/div[2]/div/div[2]/div[7]",
    "/html/body/div[2]/div/div[2]/div/div[2]/div[8]"
  ];

  const expectedMessages = [
    "I'm an autocloseable success message. I will hide in 5 seconds.",
    "I'm a normal success message. To close use the appropriate button.",
    "I'm an autocloseable warning message. I will hide in 3 seconds.",
    "I'm a normal warning message. To close use the appropriate button.",
    "I'm an autocloseable danger message. I will hide in 5 seconds.",
    "I'm a normal danger message. To close use the appropriate button.",
    "I'm an autocloseable info message. I will hide in 6 seconds.",
    "I'm a normal info message. To close use the appropriate button."
  ];

  const allAlerts = [];
for (const xpath of alertXPaths) {
  const alerts = await driver.findElements(By.xpath(xpath));
}

for (let i = 0; i < allAlerts.length; i++) {
  const alertElement = allAlerts[i];
  const expectedText = expectedMessages[i];

  const actualText = await alertElement.getAttribute("data-message");
  if (actualText !== expectedText) {
    console.error(`Error verifying alert message at index ${i}: Expected "${expectedText}" but got "${actualText}"`);
  }
}
});
       
Then('I close alerts using the cancel button', async () => {
  await openPage.closeNormalSuccessMessage();
  await openPage.closeNormalWarnningMessage();
  await openPage.closeNormalDangerMessage();
  await openPage.closeNormalInfoMessage();
});
       