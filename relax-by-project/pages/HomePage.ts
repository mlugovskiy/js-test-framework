import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    readonly searchField = this.page.locator('#search_open');
    readonly searchResultsItemContent = this.page.locator('[class="SearchResults__item--content"]');

    constructor (page: Page){
        super(page);
    }

    async open() {
        await this.navigate();
    }
}