const { By } = require('selenium-webdriver');

class BootstrapModalPage {
    constructor(driver) {
      this.driver = driver;
    }
    async openURL() {
      await this.driver.get('https://demo.seleniumeasy.com');
    }
    async clickAlertsandModals() {
      const AlertsAndModals = await this.driver.findElement(By.xpath('/html/body/div[1]/div[2]/nav/div/div[2]/ul[2]/li[2]/a'));
      await AlertsAndModals.click();
    }
    async clickBootstrapModal() {
      const BootstrapModal = await this.driver.findElement(By.xpath('/html/body/div[1]/div[2]/nav/div/div[2]/ul[2]/li[2]/ul/li[2]/a'));
      await  BootstrapModal.click();
    }
   async clickLaunchModalButton(buttonTexts){
    const LaunchModalButton = await this.driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div[1]/div/div/div[2]/a"));
    LaunchModalButton.click();
   }
   async getModalBodyText(expectedText) {
    const modalBody = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div[1]/div/div/div[2]/div/div/div/div[3]'));
    return modalBody.getText();
  }
  async clickCloseButton() { 
    try {
      const closeButton = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div[1]/div/div/div[2]/div/div/div/div[4]/a[1]')); 
      console.log('Before clicking close button');
      await this.driver.executeScript('arguments[0].click()', closeButton); 
      console.log('After clicking close button'); 
    } catch (error) {
      // throw new Error('Failed to interact with close button: ' + error.message);
    }
  }
  async GetCurrentUrl(){
    await this.driver.getCurrentUrl();
  }
  async clickLaunchModalButtonNested(buttonTexts){
    const LaunchModalButton = await this.driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div[2]/div/div/div[2]/a"));
    LaunchModalButton.click();
   }
   async clickLaunchModalButtonInsideNested(buttonTexts){
    try {
      const closeButton = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div[2]/div/div/div[2]/div[1]/div/div/div[3]/a')); 
      console.log('Before clicking close button');
      await this.driver.executeScript('arguments[0].click()', closeButton); 
      console.log('After clicking close button'); 
    } catch (error) {
      // throw new Error('Failed to interact with close button: ' + error.message);
    }
    // const LaunchModalButton = await this.driver.findElement(By.xpath(""));
    // LaunchModalButton.click();
   }
   async getNestedModalBodyText(expectedText) {
    const modalBody = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div[5]'));
    return modalBody.getText();
  }
  async clickCloseButtonNested() { 
    try {
      const closeButton = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div[6]/a[1]/html/body/div[2]/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div[6]/a[1]')); 
      console.log('Before clicking close button');
      await this.driver.executeScript('arguments[0].click()', closeButton); 
      console.log('After clicking close button'); 
    } catch (error) {
      // throw new Error('Failed to interact with close button: ' + error.message);
    }
  }
  }
  module.exports = BootstrapModalPage;
