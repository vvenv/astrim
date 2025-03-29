import { expect, test } from '@playwright/experimental-ct-react'
import { Banner } from './Banner'

test('should render banner', async ({ mount }) => {
  const component = await mount(
    <Banner />,
  )

  await expect(component.getByText('Free shipping available on all orders!')).toBeVisible()
})
