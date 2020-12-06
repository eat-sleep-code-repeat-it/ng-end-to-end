import { browser, by, element } from 'protractor';

export class DashboardPage {
  constructor(){
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root app-dashboard p')).getText();
  }
  async isDisplayed(): Promise<boolean> {
    return await element(by.css('app-root app-dashboard')).isDisplayed();
}
}
