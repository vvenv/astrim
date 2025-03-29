import { expect, test } from '@playwright/experimental-ct-react'
import { ComboInput } from './ComboInput'

test('should render textbox and label', async ({ mount }) => {
  const component = await mount(
    <ComboInput name="foo" label="Foo" />,
  )

  const input = component.getByRole('textbox', { name: 'foo' })
  const label = component.getByText('Foo')

  await expect(input).toHaveValue('')
  await expect(input).toHaveAttribute('placeholder', '')

  await expect(label).toHaveCSS(
    'top',
    '12px',
  )
  await input.click()
  await expect(label).toHaveCSS(
    'top',
    '6px',
  )

  await input.fill('bar')
  await expect(input).toHaveValue('bar')

  await input.blur()
  await expect(label).toHaveCSS(
    'top',
    '6px',
  )
})

test('should render textbox and label w/ placeholder', async ({ mount }) => {
  const component = await mount(
    <ComboInput name="foo" label="Foo" placeholder="Please input" />,
  )

  const input = component.getByRole('textbox', { name: 'foo' })
  const label = component.getByText('Foo')

  await expect(input).toHaveValue('')
  await expect(input).toHaveAttribute('placeholder', 'Please input')

  await expect(label).toHaveCSS(
    'top',
    '12px',
  )
  await input.click()
  await expect(label).toHaveCSS(
    'top',
    '6px',
  )

  await input.fill('bar')
  await expect(input).toHaveValue('bar')

  await input.blur()
  await expect(label).toHaveCSS(
    'top',
    '6px',
  )
})
