import { resolve } from 'node:path'
import { defineConfig, devices } from '@playwright/experimental-ct-react'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  testDir: './src',
  snapshotDir: './__snapshots__',
  timeout: 10 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    ctPort: 3100,
    ctViteConfig: {
      build: {
        chunkSizeWarningLimit: 100,
        rollupOptions: {
          onwarn(warning, warn) {
            if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
              return
            }
            warn(warning)
          },
        },
      },
      plugins: [
        UnoCSS(),
      ],
      resolve: {
        alias: {
          '@': resolve(new URL('.', import.meta.url).pathname, './src'),
        },
      },
    },
  },
  projects: [
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 13'],
        viewport: {
          width: 375,
          height: 667,
        },
        isMobile: true,
        colorScheme: 'dark',
      },
    },
  ],
})
