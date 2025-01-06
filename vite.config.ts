import {join} from 'node:path';
import {defineConfig} from 'vitest/config';

const PROJECT_ROOT = __dirname;

export default defineConfig({
  root: PROJECT_ROOT,
  envDir: PROJECT_ROOT,
  resolve: {
    alias: {
      '#typing': join(PROJECT_ROOT, 'packages/typing/index.ts'),
      '#common': join(PROJECT_ROOT, 'packages/common/index.ts'),
      '#diagnostic': join(PROJECT_ROOT, 'packages/diagnostic/index.ts'),
      '#analyzer': join(PROJECT_ROOT, 'packages/analyzer/index.ts'),
      '#interpreter': join(PROJECT_ROOT, 'packages/interpreter/index.ts'),
      '#translator': join(PROJECT_ROOT, 'packages/translator/index.ts'),
      '#vscode': join(PROJECT_ROOT, 'packages/vscode/index.ts'),
      '#xon-lib': join(PROJECT_ROOT, 'packages/xon-lib/index.ts'),
    },
  },
  test: {
    // ...
  },
});
