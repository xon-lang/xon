import {resolve} from 'node:path';
import {defineConfig} from 'vite';

const WORKSPACE_ROOT = resolve(__dirname, '../../');

export default defineConfig({
  resolve: {
    alias: [{find: /#(.+)/g, replacement: resolve(WORKSPACE_ROOT, 'packages/$1/index.ts')}],
  },
  build: {
    minify: false,
    target: 'node22',
    lib: {
      entry: resolve(WORKSPACE_ROOT, 'packages/vscode/src/main.ts'),
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['vscode', 'node:path', 'node:fs', 'node:fs/promises'],
      output: {
        entryFileNames: 'main.js',
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
