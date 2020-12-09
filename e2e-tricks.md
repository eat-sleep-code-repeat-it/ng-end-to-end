
# Protractor Testing Tips and Tricks

https://www.intertech.com/protractor-testing-10-tips-and-tricks/

Protractor is a testing framework which allows you to write end-to-end (E2E) tests for AngularJS applications. Built with Selenium/WebdriverJS and using Jasmine test syntax, tests written with Protractor testing simulate user behavior and help ensure that your Angular applications remain functional when changes are made.

- Along with the old standby console.log(), use browser.pause() and browser.sleep(5000) to gain insight on what your test is doing at a specific step.
- The onPrepare function in the protractor config file can be very useful. One example of something you can do in onPrepare is setting the size of the browser window that is spawned so you can see all fields as the test runs: browser.manage().window().setSize(1600, 1000);
- When writing tests, it saves a lot of time to only run the test you’re working on. Conversely, running “.spec.*” will run all of your tests without typing out the name of every test.
- Tests will run in the order written within a .spec file and files will run in the order specified in the config file. If they are running in an order that you are not expecting you may need to explicitly list the spec files in the config file rather than using “.spec.*”.
- find elements by model or by id before resorting to by css since I see css tags repeated in a given view more often.
- Create page objects to define and locate all of the elements on a page in one place.
- the setup methods beforeAll() (called once per spec file) and beforeEach() (called before every test in spec file) to be very helpful for things like setting authentication and navigating to the page that the spec file is testing.
- The selenium webdriver and chromedriver.exe need to support the version of the chrome browser in use. If you encounter the error “Session not created exception Runtime.executionContextCreated has invalid ‘context'”, the chrome browser may have auto-updated and you need to update the webdriver, chromedriver or both.
- If you are using toast in your page to signal a result, use browser.wait() with a timeout to tell the browser to watch for the toast for a specified amount of time (20 seconds below) before returning a bad result:
browser.wait(result =>{
    return element(by.className('toast-success')).isPresent();
}, 20000);
- If you are using Angular UI Grid, the helper gridTestUtils.spec.js which is included in the project is invaluable.
