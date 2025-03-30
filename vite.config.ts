import {resolve} from 'node:path';
import {defineConfig} from 'vitest/config';

const WORKSPACE_ROOT = __dirname;

export default defineConfig({
  root: WORKSPACE_ROOT,
  envDir: WORKSPACE_ROOT,
  resolve: {
    alias: [{find: /#(.+)/g, replacement: resolve(WORKSPACE_ROOT, 'packages/$1/index.ts')}],
  },
  test: {
    environment: 'node',
    alias: {
      vscode: resolve(WORKSPACE_ROOT, 'packages/vscode/vscode.mock.ts'),
    },
  },
});
