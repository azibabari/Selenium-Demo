// step_definitions.js

const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const BootstrapModalPage = require('../../bootstrap_modal_page');

let driver;
let openPage;

Given('user navigates to the Bootstrap modal page', { timeout: 120000 }, async () =>{
    driver = new Builder().forBrowser('chrome').build();
      openPage = new BootstrapModalPage(driver);
      await openPage.openURL();
      await openPage.clickAlertsandModals();
      await openPage.clickBootstrapModal();
});

When('user clicks on {string}', async (buttonText) =>{
await openPage.clickLaunchModalButton();
  });

Then('a modal should appear with the text {string}', async (expectedText) =>  {
    const modalText = await openPage.getModalBodyText();
    if (modalText.includes(expectedText)) {
      throw new Error('Modal content does not match expected text');
    }
  });

When('user clicks on "close" button', async () =>  {
        await openPage.clickCloseButton();
  });

  Then('the modal should disappear and the page should reload', async () => {
    try {
        const expectedUrl = 'https://demo.seleniumeasy.com/bootstrap-modal-demo.html'; 
        const currentUrl = openPage.GetCurrentUrl();
        if (currentUrl == expectedUrl) {
          console.log("Modal is closed and page has refreshed");
        }
      } catch (error) {
       
      }
  });

Given('user navigates to the Bootstrap modal page\\(Nested)',{ timeout: 120000 }, async () => {
   
  });


When('user clicks on {string} button\\(Nested)', async (buttonText) =>  {
  await openPage.clickLaunchModalButtonNested();
  });


Then('a modal should appear\\(Nested)', async () =>  {
   
  });

  When('user clicks on the nested {string} button inside the modal\\(Nested)', async (buttonText) =>  {
    await openPage.clickLaunchModalButtonInsideNested();
  });

Then('a nested modal should appear with different content {string}\\(Nested)', async (expectedText) =>  {
  const modalText = await openPage.getModalBodyText();
  if (modalText.includes(expectedText)) {
    throw new Error('Modal content does not match expected text');
  }
  });


When('user clicks on "Save changes" button inside the nested modal\\(Nested)', async () =>  {
  await openPage.clickCloseButtonNested();
  });

Then('all modals should disappear and the page should reload\\(Nested)', async () =>  {
  try {
    const expectedUrl = 'https://demo.seleniumeasy.com/bootstrap-modal-demo.html'; 
    const currentUrl = openPage.GetCurrentUrl();
    if (currentUrl == expectedUrl) {
      console.log("Modal is closed and page has refreshed");
    }
  } catch (error) {
   
  }
  });
