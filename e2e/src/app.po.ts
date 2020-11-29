import { browser, by, element, ElementFinder } from 'protractor';
import { CalculatorPage } from './smoke/calculator.po';
import { DashboardPage } from './dashboard/dashboard.po';

/*
  PageObject Pattern - https://github.com/SeleniumHQ/selenium/wiki/PageObjects
  The public methods represent the services that the page offers
  Try not to expose the internals of the page
  Generally don't make assertions
  Methods return other PageObjects
  Need not represent an entire page
  Different results for the same action are modelled as different methods
*/
export class AppPage {
  calculatorLink : ElementFinder;
  dashboardLink : ElementFinder;
  constructor() {
    this.calculatorLink = element(by.id('calculatorLink'));
    this.dashboardLink = element(by.id('dashboardLink'));    
  }
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }

  async navigateToCalculator(): Promise<CalculatorPage>   {
    await this.calculatorLink.click();
    return new CalculatorPage();
  }
  async navigateToDashboard(): Promise<DashboardPage> {
    await this.dashboardLink.click();
    return new DashboardPage();
  }
}
