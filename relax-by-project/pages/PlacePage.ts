import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class PlacePage extends BasePage {
    readonly address = this.page.locator('[class*="address"] > [class="Button__text"]');
    readonly workTime = this.page.locator('[class*="worktime"] > [class="Button__text"]');
    readonly phone = this.page. locator('[class="Button__phone"]');

    constructor (page: Page){
        super(page);
    }
}