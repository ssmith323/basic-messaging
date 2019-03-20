import { Given } from 'cucumber';
import { browser } from 'protractor';

Given('I am on the landing page', async () => {
  return browser.get('/');
});
