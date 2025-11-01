import {resolve} from 'node:path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

const WORKSPACE_ROOT = resolve((import.meta.dirname, '../..'));
const PROJECT_ROOT = resolve(import.meta.dirname);

export default defineConfig({
  root: PROJECT_ROOT,
  envDir: PROJECT_ROOT,
  resolve: {
    alias: [{find: /#(.+)/g, replacement: resolve(WORKSPACE_ROOT, 'packages/$1/index.ts')}],
  },
  build: {
    emptyOutDir: true,
    minify: false,
    // sourcemap: false,
    lib: {
      name: 'xon',
      formats: ['es'],
      entry: resolve(PROJECT_ROOT, 'index.ts'),
      fileName: () => `index.js`,
    },
    outDir: resolve(PROJECT_ROOT, 'dist'),
    rollupOptions: {
      cache: false,
      external: [
        'vite',
        'vitest',
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
  plugins: [
    dts({
      root: PROJECT_ROOT,
      entryRoot: PROJECT_ROOT,
      include: [PROJECT_ROOT],
      exclude: ['**/*.gen.ts', '**/dist/*.ts', '**/*output.ts', 'vite.config.ts'],
      tsconfigPath: resolve(WORKSPACE_ROOT, 'tsconfig.json'),
    }),
  ],
});
