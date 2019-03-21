import { Given } from 'cucumber';
import { browser } from 'protractor';

Given('I am on the landing page', { timeout: 2 * 5000 }, async () => {
  return browser.get('/');
});
