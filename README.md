# NgEndToEnd

## WSL setup

```bash
sudo npm  install -g protractor
sudo webdriver-manager update --chrome
sudo webdriver-manager update
sudo webdriver-manager start

wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
sudo apt-get -f install
sudo dpkg -i google-chrome-stable_current_amd64.deb
google-chrome --version


ng e2e -c smoke
ng e2e -c regression

# run within wsl
ng serve
protractor --capabilities.chromeOptions.args=--headless --capabilities.chromeOptions.args=--no-sandbox protractor.conf.js

```
## training

- Protractor Testing In Depth https://oasisdigital.com/class/e2e-protractor
- https://christianlydemann.com/why-i-moved-from-protractor-to-cypress/

## Protractor Style Guide & cheat sheet

- https://www.protractortest.org/#/style-guide
- https://github.com/CarmenPopoviciu/protractor-styleguide
- https://gist.github.com/javierarques/0c4c817d6c77b0877fda
- https://www.softwaretestinghelp.com/protractor-testing-tutorial/
- How To Debug Protractor Tests for Selenium Test Automation: https://www.lambdatest.com/blog/how-to-debug-protractor-tests-for-selenium-test-automation/

## POM Builder and selenium IDE

- https://chrome.google.com/webstore/detail/pom-builder-%E2%80%93-auto-genera/akcejfbfkkjnghlfngighgncolfaghco?hl=en-US
- https://chrome.google.com/webstore/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd?hl=en

## Jasmine: Understanding the Difference between beforeAll and beforeEach

- http://breazeal.com/blog/jasmineBefore.html#:~:text=The%20beforeAll%20function%20executes%20once,contained%20inside%20any%20inner%20describe%20.
## understanding-test-configurations-in-angular-

- https://carrieforde.com/angular-testing-with-protractor-cucumber/
- https://blog.bitsrc.io/understanding-test-configurations-in-angular-2f8b3d1fbd00
- https://github.com/bbachi/angular-configuration-example
- https://coryrylan.com/blog/introduction-to-e2e-testing-with-the-angular-cli-and-protractor
- https://livebook.manning.com/book/testing-angular-applications/chapter-10/
- https://github.com/testing-angular-applications/testing-angular-applications/tree/master/chapter10
- https://stackoverflow.com/questions/tagged/protractor?sort=votes&pageSize=20
- https://github.com/SeleniumHQ/selenium/wiki/PageObjects

## Up and Running With Headless Chrome

https://blog.bugreplay.com/2017/10/up-and-running-with-headless-chrome.html

## What’s Protractor?

From the Protractor site: “Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.”


## resolve error: This version of ChromeDriver only supports Chrome version 74

```bash
webdriver-manager shutdown
webdriver-manager clean
webdriver-manager update —versions.chrome=74.0.3729.169
webdriver-manager status
```

## run headless or inside a docker container

```js
'chromeOptions': {
    'args': ['--no-sandbox','--headless','--window-size=1600x1000']
}
```

## video

- https://www.youtube.com/watch?v=7Urc5cSIdLg&feature=youtu.be&list=PLhW3qG5bs-L_dgIr3hiOlnNIO8NGlXQnP
- https://www.youtube.com/watch?v=RSyDesxeXik&list=PLhW3qG5bs-L_dgIr3hiOlnNIO8NGlXQnP&index=9
- https://www.youtube.com/watch?v=EX0SmoUfdQ4&list=PLhW3qG5bs-L_dgIr3hiOlnNIO8NGlXQnP&index=10

## protractor reporter

- https://www.npmjs.com/package/protractor-html-reporter-2
- https://www.npmjs.com/package/protractor-jasmine2-screenshot-reporter
