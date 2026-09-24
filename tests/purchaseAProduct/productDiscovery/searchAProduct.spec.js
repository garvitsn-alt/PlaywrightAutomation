

import {test,expect} from '@playwright/test';
import HomePage from '../../../pages/HomePage.js';

test.describe('Purchase a product - Manage Cart and Addresses', () => {

test('Verify search for a product', async ({page}) => {

  // preconditons
  const homePage = new HomePage(page);
  await homePage.openApplication();
  await homePage.searchProduct('tea');

  // Verify search results are displayed
    await expect(page).toHaveURL(/search/);
    await expect(page.getByText('Tea', { exact: false }).first()).toBeVisible();

});

});