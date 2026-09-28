import { test, expect } from '@playwright/test';

test('Amazon E2E - Search and Add to Cart', async ({ page }) => {

  // Step 1: Open Amazon
  await page.goto('https://www.amazon.in/');
  await expect(page).toHaveURL(/amazon/);

  // Step 2: Search "samsung"
  const searchBox = page.getByRole('searchbox', { name: 'Search Amazon.in' });
  await searchBox.fill('samsung');

  // Wait for suggestions and click desired one
  const suggestion = page.getByRole('button', { name: /samsung tv remote/i });
  await suggestion.click();

  // Step 3: Filter by Brand "Samsung"
  const brandFilter = page.getByRole('link', { name: /Samsung/i }).first();
  await brandFilter.click();

  // Wait for results to refresh
  await page.waitForLoadState('networkidle');

  // Step 4: Select specific product
  const product = page.getByRole('link', {
    name: /Samsung OEM remote Control with Netflix Hotkey/i
  }).first();

  await expect(product).toBeVisible();
  await product.click();

  // Step 5: Handle new tab (VERY IMPORTANT for Amazon)
  const newPage = await page.context().waitForEvent('page');
  await newPage.waitForLoadState();

  // Step 6: Add to Cart
  const addToCartBtn = newPage.getByRole('button', { name: /add to cart/i });
  await expect(addToCartBtn).toBeVisible();
  await addToCartBtn.click();

  // Step 7: Validate item added
  await expect(newPage.getByText(/added to cart/i)).toBeVisible();

});