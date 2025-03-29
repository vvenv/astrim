import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4321/')
  await expect(page).toHaveTitle(/ASTRIM/)
})

test('top banner', async ({ page }) => {
  await page.goto('http://localhost:4321/')
  await expect(page.getByRole('region', { name: 'Announcement' })).toBeVisible()
  await expect(page.getByLabel('Announcement')).toContainText('Free shipping available on all orders!')
})

test('menu dropdown', async ({ page, isMobile }) => {
  test.skip(isMobile)
  await page.goto('http://localhost:4321/')
  await page.getByRole('button', { name: 'Bags' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Shop all' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Tote bags' })).toBeVisible()
  await page.getByRole('button', { name: 'Bags' }).click()
  await expect(page.getByRole('dialog')).not.toBeVisible()
  await expect(page.getByRole('link', { name: 'Shop all' })).not.toBeVisible()
  await expect(page.getByRole('link', { name: 'Tote bags' })).not.toBeVisible()
})

test('menu drawer', async ({ page, isMobile }) => {
  test.skip(!isMobile)
  await page.goto('http://localhost:4321/')
  await page.getByLabel('Toggle menu').click()
  await expect(
    page.getByTestId('header-drawer-content').locator('div').nth(1),
  ).toBeVisible()
})
