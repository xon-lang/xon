import {resolve} from 'node:path';
import {defineConfig} from 'vitest/config';

const WORKSPACE_ROOT = resolve(__dirname, '../../');

export default defineConfig({
  resolve: {
    alias: [{find: /#(.+)/g, replacement: resolve(WORKSPACE_ROOT, 'packages/$1/index.ts')}],
  },
  build: {
    minify: false,
    target: 'node20',
    lib: {
      entry: resolve(WORKSPACE_ROOT, 'packages/vscode/src/main.ts'),
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['vscode', 'node:path', 'node:fs'],
      output: {
        entryFileNames: 'main.js',
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
