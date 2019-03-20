import { by, element } from 'protractor';

export class Forms {
  inputText(selector: string, value: string) {
    return element(by.css(selector)).sendKeys(value);
  }

  async clickButton(selector: string) {
    return await element(by.css(selector)).click();

  }
}
