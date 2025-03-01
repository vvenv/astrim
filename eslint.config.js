// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    astro: true,
    formatters: true,
    react: true,
    unocss: true,
  },
  {
    rules: {
      'antfu/no-top-level-await': 'off',
      'node/prefer-global/process': ['error', 'always'],
    },
  },
)
