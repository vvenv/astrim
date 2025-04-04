import { expect, test } from '@playwright/experimental-ct-react'
import { Search } from './Search'

test('should render search button', async ({ mount }) => {
  const component = await mount(
    <Search />,
  )

  await expect(component.getByRole('button', { name: 'Toggle search' })).toBeVisible()
})

test('should open search dialog', async ({ mount }) => {
  const component = await mount(
    <Search />,
  )

  await component.getByRole('button', { name: 'Toggle search' }).click()
  await expect(component.page().getByRole('combobox', { name: 'Search' })).toBeVisible()
})

test('should have correct form attributes', async ({ mount }) => {
  const component = await mount(
    <Search />,
  )

  await component.getByRole('button', { name: 'Toggle search' }).click()
  const form = component.page().locator('#search-form')
  await expect(form).toHaveAttribute('action', '/search')
  await expect(form).toHaveAttribute('method', 'get')
})

test('should close search dialog', async ({ mount }) => {
  const component = await mount(
    <Search />,
  )

  await component.page().getByRole('button', { name: 'Toggle search' }).click()
  await component.page().getByRole('button', { name: 'Close search' }).click()
  await expect(component.page().getByRole('search')).not.toBeVisible()
})
