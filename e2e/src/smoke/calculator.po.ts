import { browser, by, element, ElementFinder, promise } from 'protractor';

/*
    POM pattern
    encapsulates information for our tests

    initialize the variables within the class' constructor
    If the applications changes, we can update the page object, rather than individual tests
*/
export class CalculatorPage {
    title: ElementFinder;
    firstNumber: ElementFinder;
    secondNumber: ElementFinder;
    addButton: ElementFinder;
    sumResult: ElementFinder;
    numberSelection: ElementFinder;
    constructor() {
        this.title = element(by.css('app-root app-calculator p'));
        this.firstNumber = element(by.id('firstNumber'));
        this.secondNumber = element(by.id('secondNumber'));
        this.addButton = element(by.id('addButton'));
        this.sumResult =  element(by.id('sumResult'));
        this.numberSelection = element(by.id('numberSelection'));
    }

    /*
    Protractor implements the WebDriver Control Flow
        which helps tests execute in a synchronous manner.
    However, WebDriver Control Flow is being removed,
        and Protractor suggests using async / await to manage the control flow instead
    */
    async navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl + 'calculator');
    }

    async getTitleText(): Promise<string> {
        return this.title.getText();
    }
    async setFirstValue(firstNum: number) {
        this.firstNumber.clear();        
        this.firstNumber.sendKeys(firstNum);
    }
    async setSecondValue(secondNum: number) {
        this.secondNumber.clear();
        this.secondNumber.sendKeys(secondNum);
    }
    async addValues(firstNum: number, secondNum: number) {
        this.setFirstValue(firstNum);
        this.setSecondValue(secondNum);
        this.addButton.click();
    }
    /*
    async getFirstValue(): Promise<string> {
        return this.firstNumber.getAttribute('value')
    }
    async getSecondValue(): Promise<string> {
        return this.secondNumber.getAttribute('value')
    }
    async getSumResult(): Promise<string> {
        return this.sumResult.getAttribute('value')
    }
    */
}
