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

test('menu drawer', async ({ page, isMobile }) => {
  test.skip(!isMobile)
  await page.goto('http://localhost:4321/')
  await page.getByLabel('Toggle menu').click()
  await expect(page.getByTestId('header-drawer-content')).toBeVisible()
})
