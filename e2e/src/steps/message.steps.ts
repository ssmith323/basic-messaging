import { expect } from 'chai';
import { Before, Given, Then, When } from 'cucumber';
import { browser } from 'protractor';

import { Elements } from '../page-objects/elements.po';
import { Forms } from '../page-objects/forms.po';


let forms: Forms;
let elements: Elements;

Before(() => {
  forms = new Forms();
  elements = new Elements();
});

Given('I successfully entered {string}', { timeout: 2 * 5000 }, async (message: string) => {
  browser.get('/');
  forms.inputText('#messageInput', message);
});

When('I enter {string}', { timeout: 2 * 5000 }, async (message: string) => {
  return forms.inputText('#messageInput', message);
});

When('click {string}', { timeout: 2 * 5000 }, async (button: string) => {
  return forms.clickButton(`#${button.toLowerCase()}`);
});

Then('I should be taken to the confirmation page', { timeout: 2 * 5000 }, async () => {
  expect(await browser.getCurrentUrl()).to.contains('success');
});


Then('I should see an error message', { timeout: 2 * 5000 }, async () => {
  expect(await elements.getElementsText('error')).to.be('Error');
});
