const { By, Key, until} = require('selenium-webdriver');
//Bootsrap Alerts Page
class BootstrapAlertPage {
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
    async clickBootstrapAlerts() {
      const BootstrapAlerts = await this.driver.findElement(By.xpath('/html/body/div[1]/div[2]/nav/div/div[2]/ul[2]/li[2]/ul/li[1]/a'));
      await BootstrapAlerts.click();
    }
    async clickAutocloseableSuccessMessage() {
      const AutocloseableSuccessMessage = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[1]/button[1]'));
      await AutocloseableSuccessMessage.click();
    }
    async clickNormalSuccessMessage() {
      const NormalSuccessMessage = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[1]/button[2]'));
      await NormalSuccessMessage.click();

    }
    async clickAutocloseableWarningMessage() {
      const AutocloseableWarningMessage = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[1]/button[3]'));
      await AutocloseableWarningMessage.click();
    }
    async clickNormalWarningMessage() {
      const NormalWarningMessage = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[1]/button[4]'));
      await NormalWarningMessage.click();
    }
    async clickAutocloseableDangerMessage() {
      const AutocloseableDangerMessage = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[1]/button[5]'));
      await AutocloseableDangerMessage.click();
    }
    async clickNormalDangerMessage() {
      const NormalDangerMessage = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[1]/button[6]'));
      await NormalDangerMessage.click();
    }
    async clickAutocloseableInfoMessage() {
      const AutocloseableInfoMessage = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[1]/button[7]'));
      await AutocloseableInfoMessage.click();
    }
    async clickNormalInfoMessage() {
      const NormalInfoMessage = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[1]/button[8]'));
      await NormalInfoMessage.click();
    }
    
    async closeNormalSuccessMessage() {
      const element = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]'));
      const closeButton = await element.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/button')); 
      await closeButton.click();
    }
  
    async closeNormalWarnningMessage() {
      const element = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[4]'));
      const closeButton = await element.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[4]/button')); 
      await closeButton.click();
    }
    async closeNormalDangerMessage() {
      const element = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[6]'));
      const closeButton = await element.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[6]/button')); 
      await closeButton.click();
    }
    async closeNormalInfoMessage() {
      const element = await this.driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[8]'));
      const closeButton = await element.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[8]/button')); 
      await closeButton.click();
    }
  }
  module.exports = BootstrapAlertPage;
