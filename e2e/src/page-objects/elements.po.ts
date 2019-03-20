import { by, element } from 'protractor';

export class Elements {
  async getElementsText(selector: string) {
    return await element(by.css(selector)).getText();
  }
}
