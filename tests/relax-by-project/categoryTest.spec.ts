import { test, expect } from '@playwright/test';
import { HomePage } from '../../relax-by-project/pages/HomePage';

test('Select "Рестораны" category on Home page - page with heading "Рестораны Минска" should open.', async ({page}) => {
    const homePage = new HomePage(page);
  
    await homePage.open();
    await homePage.foodCategory.click();
    await homePage.restaurantsSubCategory.click();
  
    await expect(page.locator('h1')).toHaveText("Рестораны Минска");
  })