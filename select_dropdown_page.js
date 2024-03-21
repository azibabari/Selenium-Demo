//Select_dropdown_page.js
const { By, Select } = require('selenium-webdriver');

class SelectDropdownPage {
    constructor(driver) {
      this.driver = driver;
    }
    async openURL() {
      await this.driver.get('https://demo.seleniumeasy.com');
    }
    async clickInputFormsLink() {
      const inputFormsLink = await this.driver.findElement(By.linkText('Input Forms'));
      await inputFormsLink.click();
    }
    async clickSelectDropdownListsLink() {
      const selectDropdownListsLink = await this.driver.findElement(By.xpath('/html/body/div[1]/div[2]/nav/div/div[2]/ul[1]/li[1]/ul/li[4]/a'));
      await selectDropdownListsLink.click();
    }
    async navigateToSingleSelectSection() {
      const singleSelectSectionLink = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div[1]/div[1]'));
      await singleSelectSectionLink.click();
    }
    async findDayOfWeekDropdown() {
      return await this.driver.findElement(By.id('select-demo'));
    }
    async selectDayOfTheWeekByValue(value) {
      const dayOfWeekDropdown = await this.findDayOfWeekDropdown();
      const select = new Select(dayOfWeekDropdown);
      await select.selectByValue(value);
    }
    async findDisplayedValueElement() {
      return await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/p[2]'));
    }


    async navigateToMultiSelectSection() {
      const multiselectsection = await this.driver.findElement(By.id('multi-select')); 
      await this.driver.executeScript('arguments[0].scrollIntoView(true);', multiselectsection);
    }
    async findMultiSelectDropdown() {
      return await this.driver.findElement(By.id('multi-select')); 
    }
    async selectCityByName(cityName) {
      const multiSelectDropdown = await this.findMultiSelectDropdown();
      const select = new Select(multiSelectDropdown);
      await select.selectByVisibleText(cityName);
    }
    
    async getFirstSelectedOption() {
      const multiSelectDropdown = await this.findMultiSelectDropdown();
      const select = new Select(multiSelectDropdown); 
      return select.getFirstSelectedOption();
    }
    
    async getFirstSelectedOptionText() {
      const firstSelectedOption = await this.getFirstSelectedOption();
      return await firstSelectedOption.getText();
    }
    
    async clickButtonWithText(buttonText) { // First selected
      const button = await this.driver.findElement(By.xpath(`/html/body/div[2]/div/div[2]/div[2]/div[2]/button[1]`));
      await button.click();
    }
    async clickGetAllSelected() { 
      const getAllSelectedButton = await this.driver.findElement(By.xpath(`/html/body/div[2]/div/div[2]/div[2]/div[2]/button[2]`));
      await getAllSelectedButton.click();
    }
    
    async getDisplayedValueUnderField() {
      const displayedValueElement = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div[2]/div[2]/p[2]')); 
      return displayedValueElement.getText();
    }
    async getAllSelectedCities() {
      const selectedOptions = await this.driver.findElements(By.xpath('/html/body/div[2]/div/div[2]/div[2]/div[2]/select')); 
      const displayedCities = [];
      for (const option of selectedOptions) {
        displayedCities.push(await option.getText());
      }
      return displayedCities;
    }
    async getSelectedOptions() {
      const dropdownElement = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div[2]/div[2]/select')); 
      const selectedOptions = await dropdownElement.findElements(By.xpath('.//option[@selected]')); 
      return selectedOptions;
    }
}
  module.exports = SelectDropdownPage;
