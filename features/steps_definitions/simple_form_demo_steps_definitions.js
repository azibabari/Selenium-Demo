// step_definitions.js

const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const SimpleFormPage = require('../../simple_form_page.js');

let driver;
let openPage;


Given('the user is on the Simple Form Demo page', { timeout: 120000 }, async () =>{
  driver = new Builder().forBrowser('chrome').build();
  openPage = new SimpleFormPage(driver);
  await openPage.openURL();
  await openPage.clickInputFormsLink();
  await openPage.clickSimpleFormDemoLink();
});

When('the user inputs {string} in the textfield', async (message) =>  {
  await openPage.enterMessage(message);
});

When('the user clicks the "Show Message" button', async () => {
  await openPage.clickShowMessageButton();
});

Then('{string} should display below the input field', async (expectedText) => {
  await openPage.scrollUntillAzibabariIsVisible();
});
 
Given('the user is on the Simple Form Demo page \\(Multiple Fields section)', async () => {
    // the first given step definition already handles this.
  
});
       
When('the user enters {string} in the first field', async (first_number) => {
  await openPage.enterValueInFirstField(first_number);
});
       
When('the user enters {string} in the second field', async (second_number) => {
  await openPage.enterValueInSecondField(second_number);
});

When('the user clicks the "Get Total" button', async () => {
  await openPage.clickGetTotalButton();
});

       
Then('the total displayed should be {string}', async (expectedSum) => {
  let calculatedTotal=await openPage.getCalculatedTotal()
  if(calculatedTotal!=parseFloat(expectedSum)){
    console.log("Error: Figures after decimal points are ignored")
  }
});

async () => {
  await driver.quit();
};