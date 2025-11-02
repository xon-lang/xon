import {resolve} from 'node:path';
import {defineConfig} from 'vitest/config';

const WORKSPACE_ROOT = resolve(import.meta.dirname);

export default defineConfig({
  root: WORKSPACE_ROOT,
  resolve: {
    alias: [
      {find: '#grammar', replacement: resolve(WORKSPACE_ROOT, 'packages/grammar/index.ts')},
      {find: '#typing', replacement: resolve(WORKSPACE_ROOT, 'packages/typing/index.ts')},
      {find: '#common', replacement: resolve(WORKSPACE_ROOT, 'packages/common/index.ts')},
      {find: '#analyzer', replacement: resolve(WORKSPACE_ROOT, 'packages/analyzer/index.ts')},
      {find: '#interpreter', replacement: resolve(WORKSPACE_ROOT, 'packages/interpreter/index.ts')},
      {find: '#translator', replacement: resolve(WORKSPACE_ROOT, 'packages/translator/index.ts')},
      {find: '#language-adapter', replacement: resolve(WORKSPACE_ROOT, 'packages/language-adapter/index.ts')},
      {find: '#vscode', replacement: resolve(WORKSPACE_ROOT, 'packages/vscode/index.ts')},
      {find: '#xon-lib', replacement: resolve(WORKSPACE_ROOT, 'packages/xon-lib/index.ts')},
    ],
  },
});
