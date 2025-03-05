// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    astro: true,
    formatters: true,
    react: true,
    unocss: true,
    isInEditor: false,
  },
  {
    ignores: ['api.generated.d.ts'],
  },
  {
    rules: {
      'antfu/no-top-level-await': 'off',
      'node/prefer-global/process': ['error', 'always'],
    },
  },
)
