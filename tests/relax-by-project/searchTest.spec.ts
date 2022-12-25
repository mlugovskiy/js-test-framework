import { test, expect } from '@playwright/test';
import { HomePage } from '../../relax-by-project/pages/HomePage';
import { PlacePage } from '../../relax-by-project/pages/PlacePage';

test('Search test', async ({page}) => {
  const homePage = new HomePage(page);
  const placePage = new PlacePage(page);

  await homePage.open();
  await homePage.searchField.fill('Luna');
  await homePage.searchResultsItemContent
  .filter({hasText: "Luna"})
  .filter({hasText: "Рестобар"})
  .click();

  await expect(placePage.address).toHaveText('Могилев, ул. Ленинская, 22');
  await expect(placePage.workTime).toHaveText('до 02:00');
  await expect(placePage.phone).toHaveText('+375  29 333-00-74');
})