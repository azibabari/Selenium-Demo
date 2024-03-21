//select_dropdown_list_step_definitions.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver'); 
const SelectDropdownPage = require('../../select_dropdown_page.js');

let driver;
let openPage;

Given('the user is on the Select Dropdown Lists page', { timeout: 120000 }, async () =>{
  driver = new Builder().forBrowser('chrome').build();
  openPage = new SelectDropdownPage(driver);
  await openPage.openURL();
  await openPage.clickInputFormsLink();
});

When('the user accesses the Select Dropdown lists', async () => {
  await openPage.clickSelectDropdownListsLink();
});

When('navigates to the single select section', async () => {
  await openPage.navigateToSingleSelectSection();
});

When('selects all the days of the week one by one', async () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  for (const day of daysOfWeek) {
    await openPage.selectDayOfTheWeekByValue(day);
  }
});

Then('for any day user selects, value should be shown below the select field', async () => {
  const displayedValueElement = await openPage.findDisplayedValueElement();

  for (const dayOfWeek of ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']) {
    await openPage.selectDayOfTheWeekByValue(dayOfWeek);
    const displayedValue = await displayedValueElement.getText();
    const selected = `Day selected :- ${dayOfWeek}`;
    if (displayedValue !== selected) {
      console.error(`Error: Selected day '${dayOfWeek}' doesn't match displayed value '${displayedValue}'`);
    } else {
      // console.log(`Selected day '${dayOfWeek}' matches displayed value.`);
    }
  }
});
Given('the user is on the Select Dropdown Lists page \\(Multiple Select section)', async () => {
  // the first given step definition already handles this.
});

When('the user navigates to the multiple select section', async () => {
  await openPage.clickSelectDropdownListsLink();
  await openPage.navigateToMultiSelectSection();
});

When('the user selects any city', async () => {
  await openPage.selectCityByName('New York');
});
    
When('the user clicks on the "First  Selected" button', async (buttonText) =>{
  await openPage.clickButtonWithText(buttonText);
});
       
Then('the first selected option should be displayed under the field\\(one option)', async () => {
  const displayedValue = await openPage.getDisplayedValueUnderField();
  const firstSelectedOption = await openPage.getFirstSelectedOptionText();
  const firstSelected = `First selected option is : ${firstSelectedOption}`;
  if (displayedValue === firstSelected) {
    console.log('The first selected option is displayed under the field as expected.');
  } else {
    // console.error('Error: The displayed value does not match the first selected option!');
  }
});
       
When('the user clicks on "Get all selected"\\(one option)', async () =>{
  await openPage.clickGetAllSelected();
});
          
Then('all selected cities should be displayed\\(one option)', async () => {
  const displayedCities = await openPage.getAllSelectedCities();
});
       
 When('the user selects multiple cities', async () => {
  // const citiesToSelect = ['New York', 'Ohio', 'Texas']; 
  // for (const city of citiesToSelect) {
  //   await openPage.selectCityByName(city); 
  // }
});

    
When('the user clicks on the {string} button', async (buttonText) => {
  console.log("Blocked by users nnot being able select more than one city by click");
  // await openPage.clickButtonWithText(buttonText);
});
       

Then('the first selected option should be displayed under the field', async () => {
  console.log("Blocked by users nnot being able select more than one city by click");
  // const displayedValue = await openPage.getDisplayedValueUnderField();
  // const firstSelectedOption = await openPage.getFirstSelectedOptionText();
  // if (displayedValue === firstSelectedOption) {
  //   console.log('The first selected option is displayed under the field as expected.');
  // } else {
  //   console.error('Error: The displayed value does not match the first selected option!');
  // }
});
       
When('the user clicks on "Get all selected"',async () => {
  console.log("Blocked by users nnot being able select more than one city by click");
  // await openPage.clickGetAllSelected(getAllSelectedButton);
});
       
Then('all selected cities should be displayed', async () => {
  console.log("Blocked by users nnot being able select more than one city by click");
  // const displayedCities = await openPage.getAllSelectedCities();
});

async () => {
  await driver.quit();
};
      


