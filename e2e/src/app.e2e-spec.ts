import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';
import { createWriteStream } from 'fs';
import { CalculatorPage } from './smoke/calculator.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('ng-end-to-end app is running!');
  });

  it('should display calculator link', async () => {
    await page.navigateTo();
    expect(await page.calculatorLink.isDisplayed()).toEqual(true);
    expect(await page.dashboardLink.isDisplayed()).toEqual(true);
  });

  it('should goto calculator(method-1)', async () => {
    await page.navigateTo();
    await page.calculatorLink.click();
    expect(await element(by.css('app-root app-calculator')).isDisplayed()).toBe(true);
  });

  it('should goto calculator(method-2)', async () => {
    const calculator = await page.navigateToCalculator();
    expect(await calculator.isDisplayed()).toBe(true);
  });

  it('should goto dashboard', async () => {
    const dashboard = await page.navigateToDashboard();
    expect(await dashboard.isDisplayed()).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });


  describe('Take screenshot', function() {
    // browser.ignoreSynchronization = true; // for non-angular websites
    it('get Cookie test in Protractor', function() {
      page.navigateTo();

      // take screenshot
      browser.takeScreenshot().then(function (png) {
        var stream = createWriteStream("exception.png");
        stream.write(new Buffer(png, 'base64'));
        stream.end();
      });
    });
  });
  
});
