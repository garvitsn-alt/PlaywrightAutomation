
import {test,expect} from '@playwright/test';
import HomePage from '../../../pages/HomePage.js';

test.describe('Purchase a product - Manage Cart and Addresses', () => {

test('Verify cart is accessible after logIn', async ({page}) => {

    const homePage = new HomePage(page);
    await homePage.openApplication();

})


test('Verify adding a product leads to show up that product in cart', async ({page}) => {

  // preconditons
  const homePage = new HomePage(page);
  await homePage.openApplication();
  await homePage.searchProduct('tea');
      // Verify search results are displayed
    await expect(page).toHaveURL(/search/);
    await expect(page.getByText('Tea', { exact: false }).first()).toBeVisible();
    
  await homePage.opemFirstProduct();
  await homePage.addToCart();

  //assertions

})

})