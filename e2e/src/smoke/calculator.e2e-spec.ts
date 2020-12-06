import { browser, logging, by } from 'protractor';
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

  describe('should display', ()=> {
    it('calculator', async () => {    
      expect(await page.getTitleText()).toEqual('calculator');
    });
  
    it('first number input', async () => {
      // check the returned value is the same as true
      expect(await page.firstNumber.isDisplayed()).toBe(true);
  
      // checks if the returned value is true
      // expect(await page.firstNumber.isDisplayed()).toBeTrue();
  
      // check if the value, when cast to a boolean, will be a truthy value
      expect(await page.firstNumber.isDisplayed()).toBeTruthy();
    });
  
    it('second number input', async () => {    
      expect(await page.secondNumber.isDisplayed()).toBeTruthy();
    });
  
    it('add button', async () => {    
      expect(await page.addButton.isDisplayed()).toBeTruthy();
    });
  
    it('selection', async () => {    
      expect(await page.numberSelection.isDisplayed()).toBe(true);
    });
  })  

  describe('calculator', ()=>{
    it('should read first number', async () => {  
      /*
      page.firstNumber.clear();  
      page.firstNumber.sendKeys(10);
      
      */ 
      await page.setFirstValue(10);
      expect(await page.firstNumber.getAttribute('value')).toEqual('10');
    });
  
    it('should read second number', async () => {   
      /*
      page.secondNumber.clear(); 
      page.secondNumber.sendKeys(20);      
      */
      await page.setSecondValue(20);
      expect(await page.secondNumber.getAttribute('value')).toEqual('20');  
    });
  
    it('should add first and second number', async () => {
      page.addValues(10, 20);      
      expect(await page.sumResult.getText()).toEqual('30');
    });
  })  

  describe('test select', ()=> {
    it('option count ', async () => {   
      const options = page.numberSelection.all(by.tagName('option'));
      expect(await options.count()).toEqual(4);
    });    
    it('first option', async () => {   
      const options = page.numberSelection.all(by.tagName('option'));
      var firstOption = options.first();
      expect(await firstOption.getText()).toEqual('10');
    });
    it('second option', async () => {   
      const options = page.numberSelection.all(by.tagName('option'));
      var option = options.get(1);
      expect(await option.getText()).toEqual('20');
    });
    it('third option', async () => {   
      const options = page.numberSelection.all(by.tagName('option'));
      var option = options.get(2);
      expect(await option.getText()).toEqual('30');
    });
    it('should selected third option', async () => {   
      const options = page.numberSelection.all(by.tagName('option'));
      var option = options.get(2)
      option.click();
      expect(await option.getAttribute('value')).toEqual('30');
    });
  })  
  it('set first number from option', async () => {   
    const options = page.numberSelection.all(by.tagName('option'));
    var option = options.get(2)
    option.click();
    const num = await option.getAttribute('value');
    expect(await option.getAttribute('value')).toEqual(num);

    page.firstNumber.clear(); 
    page.firstNumber.sendKeys(num);
    expect(await page.firstNumber.getAttribute('value')).toEqual(num);
  });

  it('set second number from option', async () => {   
    const options = page.numberSelection.all(by.tagName('option'));
    var option = options.get(1)
    option.click();
    const num = await option.getAttribute('value');
    expect(await option.getAttribute('value')).toEqual(num);

    page.secondNumber.clear(); 
    page.secondNumber.sendKeys(num);
    expect(await page.secondNumber.getAttribute('value')).toEqual(num);
  });

  it('add first and second number from option', async () => {   
    const options = page.numberSelection.all(by.tagName('option'));
    var option = options.get(1)
    option.click();

    const num = await option.getAttribute('value');
    expect(await option.getAttribute('value')).toEqual(num);

    page.firstNumber.clear(); 
    page.firstNumber.sendKeys(num);
    expect(await page.firstNumber.getAttribute('value')).toEqual(num);

    page.secondNumber.clear(); 
    page.secondNumber.sendKeys(num);
    expect(await page.secondNumber.getAttribute('value')).toEqual(num);

    page.addButton.click();

    expect(await page.sumResult.getText()).toEqual('40');  
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
