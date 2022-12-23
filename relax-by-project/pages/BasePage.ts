import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly homeUrl ='https://www.relax.by';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(urlPath: string = "") {
    await this.page.goto(`${this.homeUrl}/${urlPath}`);
  }
}