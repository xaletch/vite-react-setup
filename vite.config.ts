/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import svgr from "vite-plugin-svgr";
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
// import { fileURLToPath } from 'node:url';
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
// const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    tanstackRouter({ target: 'react', autoCodeSplitting: true, routesDirectory: "./src/app/routes" }), 
    react(),
    tailwindcss(),
    svgr()
  ],

  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },

  server: {
    host: true,
    port: 3000,
    watch: { usePolling: true },
  },

  // test: {
  //   projects: [{
  //     extends: true,
  //     plugins: [
  //     // The plugin will run tests for the stories defined in your Storybook config
  //     // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
  //     storybookTest({
  //       configDir: path.join(dirname, '.storybook')
  //     })],
  //     test: {
  //       name: 'storybook',
  //       browser: {
  //         enabled: true,
  //         headless: true,
  //         provider: 'playwright',
  //         instances: [{
  //           browser: 'chromium'
  //         }]
  //       },
  //       setupFiles: ['.storybook/vitest.setup.ts']
  //     }
  //   }]
  // }
});