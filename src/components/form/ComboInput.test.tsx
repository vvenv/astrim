import { expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { ComboInput } from './ComboInput'

it('should render textbox and label', async () => {
  const { getByRole, getByText } = render(
    <ComboInput name="foo" label="Foo" />,
  )

  const input = getByRole('textbox', { name: 'foo' })
  const label = getByText('Foo')

  await expect.element(input).toHaveValue('')
  await expect.element(input).toHaveAttribute('placeholder', '')

  await expect.element(label).toHaveStyle({
    top: '12px',
  })
  await input.click()
  await expect.element(label).toHaveStyle({
    top: '6px',
  })

  await input.fill('bar')
  await expect.element(input).toHaveValue('bar')

  input.element().closest('body')?.click()
  await expect.element(label).toHaveStyle({
    top: '6px',
  })
})

it('should render textbox and label w/ placeholder', async () => {
  const { getByRole, getByText } = render(
    <ComboInput name="foo" label="Foo" placeholder="Please input" />,
  )

  const input = getByRole('textbox', { name: 'foo' })
  const label = getByText('Foo')

  await expect.element(input).toHaveValue('')
  await expect.element(input).toHaveAttribute('placeholder', 'Please input')

  await expect.element(label).toHaveStyle({
    top: '12px',
  })
  await input.click()
  await expect.element(label).toHaveStyle({
    top: '6px',
  })

  await input.fill('bar')
  await expect.element(input).toHaveValue('bar')

  input.element().closest('body')?.click()
  await expect.element(label).toHaveStyle({
    top: '6px',
  })
})
