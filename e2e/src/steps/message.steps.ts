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

Given('I successfully entered "{string}"', async (message: string) => {
  browser.get('/');
  forms.inputText('#messageInput', message);
});

When('I enter "{string}"', async (message: string) => {
  forms.inputText('#messageInput', message);
});

When('click "{string}"', async (button: string) => {
  forms.clickButton(`#${button.toLowerCase()}`);
});

Then('I should be taken to the confirmation page', async () => {
  expect(browser.getCurrentUrl).to.contains('success');
});


Then('I should see an error message', async () => {
  expect(await elements.getElementsText('error')).to.be('Error');
});
