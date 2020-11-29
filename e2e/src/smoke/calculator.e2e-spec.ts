import { browser, logging } from 'protractor';
import { createWriteStream } from 'fs';
import { CalculatorPage } from './calculator.po';

/*
Protractor implements the WebDriver Control Flow
which helps tests execute in a synchronous manner.
However, WebDriver Control Flow is being removed,
and Protractor suggests using async / await to manage the control flow instead.
*/
describe('test Caculator', () => {
  let page: CalculatorPage = new CalculatorPage();

  beforeEach(async() => {
    // use wait if having issue with sync 
    await browser.wait(page.navigateTo());
    // await page.navigateTo();
  });

  it('should display calculator', async () => {    
    expect(await page.getTitleText()).toEqual('calculator');
  });

  it('should display first number input', async () => {    
    expect(await page.firstNumber.isDisplayed).toBeTruthy();
  });
  it('should display second number input', async () => {    
    expect(await page.secondNumber.isDisplayed).toBeTruthy();
  });
  it('should display add button', async () => {    
    expect(await page.addButton.isDisplayed).toBeTruthy();
  });

  it('should read first number', async () => {  
    page.firstNumber.clear();  
    page.firstNumber.sendKeys(10);
    expect(await page.firstNumber.getAttribute('value')).toEqual('10');  
  });
  it('should read second number', async () => {   
    page.secondNumber.clear(); 
    page.secondNumber.sendKeys(20);
    expect(await page.secondNumber.getAttribute('value')).toEqual('20');  
  });

  it('should add first and second number', async () => {
    page.setValue(10, 20);

    page.addButton.click();
    
    expect(await page.sumResult.getText()).toEqual('30');
  });

  

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
