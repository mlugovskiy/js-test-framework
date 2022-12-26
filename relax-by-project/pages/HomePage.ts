import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  readonly searchField = this.page.locator('#search_open');
  readonly searchResultsItemContent = this.page.locator('[class="SearchResults__item--content"]');
  readonly foodCategory = this.page.locator('[class^="CategoriesMainMenu"]:text-is("Еда")');
  readonly restaurantsSubCategory = this.page.locator('[class^="CategoriesSubMenu"]:text-is("Рестораны")');

  constructor (page: Page){
    super(page);
  }

  async open() {
    await this.navigate();
  }
}