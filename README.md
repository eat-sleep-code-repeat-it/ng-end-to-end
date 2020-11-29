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

## Protractor Style Guide

- https://github.com/CarmenPopoviciu/protractor-styleguide

## Jasmine: Understanding the Difference between beforeAll and beforeEach

- http://breazeal.com/blog/jasmineBefore.html#:~:text=The%20beforeAll%20function%20executes%20once,contained%20inside%20any%20inner%20describe%20.
## understanding-test-configurations-in-angular-

- https://carrieforde.com/angular-testing-with-protractor-cucumber/
- https://blog.bitsrc.io/understanding-test-configurations-in-angular-2f8b3d1fbd00
- https://github.com/bbachi/angular-configuration-example
- https://coryrylan.com/blog/introduction-to-e2e-testing-with-the-angular-cli-and-protractor
- https://livebook.manning.com/book/testing-angular-applications/chapter-10/
- https://github.com/testing-angular-applications/testing-angular-applications/tree/master/chapter10


## Up and Running With Headless Chrome

https://blog.bugreplay.com/2017/10/up-and-running-with-headless-chrome.html

## What’s Protractor?

From the Protractor site: “Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.”