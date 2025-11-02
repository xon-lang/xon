import {resolve} from 'node:path';
import dts from 'unplugin-dts/vite';
import {defineConfig} from 'vite';

const WORKSPACE_ROOT = resolve(import.meta.dirname, '../../');
const PROJECT_ROOT = resolve(import.meta.dirname);

export default defineConfig({
  resolve: {
    alias: [{find: /#(.+)/g, replacement: resolve(WORKSPACE_ROOT, 'packages/$1/index.ts')}],
  },
  build: {
    // target: 'node18',
    outDir: resolve(PROJECT_ROOT, 'dist'),
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
    lib: {
      formats: ['es'],
      entry: resolve('index.ts'),
      fileName: () => `index.js`,
    },
    rollupOptions: {
      cache: false,
      external: [
        // 'vite',
        // 'vitest',
        'typia',
        'fs',
        'fs/promises',
        'events',
        'node:util',
        'node:fs',
        'path',
        'node:path',
        'node:url',
        'node:events',
        'node:stream',
        'node:string_decoder',
        'node:fs/promises',
        'os',
      ],
    },
  },
  plugins: [dts({bundleTypes: true})],
});
// tsconfigPath: resolve(WORKSPACE_ROOT, 'tsconfig.json')
