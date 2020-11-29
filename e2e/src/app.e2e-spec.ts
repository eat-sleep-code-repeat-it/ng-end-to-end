import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { createWriteStream } from 'fs';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('ng-end-to-end app is running!');
  });

  it('should display first number imput', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('ng-end-to-end app is running!');
  });

  it('should display second number imput', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('ng-end-to-end app is running!');
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
