const { By } = require('selenium-webdriver');

class SimpleFormPage {
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
    async clickSimpleFormDemoLink() {
      const simpleFormDemoLink = await this.driver.findElement(By.linkText('Simple Form Demo'));
      await simpleFormDemoLink.click();
    }
    async enterMessage() {
      const message = "Azibabari"; 
      const messageInput = await this.driver.findElement(By.id('user-message'));
      await messageInput.sendKeys(message);
    }

    async clickShowMessageButton() {
      const showMessageButton = await this.driver.findElement(By.className('btn btn-primary'));
      await showMessageButton.click();
    }
    //scroll to the end of the page so you can see the other features
    async scrollUntillAzibabariIsVisible() {
      const tutorialsMenu = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div/span'));
      await this.driver.executeScript('arguments[0].scrollIntoView(true);', tutorialsMenu);
    }

  }
  
  module.exports = SimpleFormPage;
  