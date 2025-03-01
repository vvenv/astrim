import { pluckConfig, preset } from '@shopify/graphql-codegen'

export default {
  overwrite: true,
  pluckConfig,
  generates: {
    'api.generated.d.ts': {
      preset,
      schema: 'https://mock.shop/api',
      documents: ['**/*.gql'],
      presetConfig: {
        interfaceExtension: ({ queryType, mutationType }: any) => `
          declare module 'api' {
            interface Queries extends ${queryType} {}
            interface Mutations extends ${mutationType} {}
          }`,
      },
    },
  },
}
