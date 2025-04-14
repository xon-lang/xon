import {promises as fs} from 'node:fs';
import {extname, join} from 'node:path';

const directories = [
  'packages/grammar',
  'packages/analyzer',
  'packages/common',
  'packages/diagnostic',
  'packages/interpreter',
  'packages/translator',
  'packages/typing',
  'packages/xon-lib',
  'packages/vscode',
];

const excludeDirectories = ['dist', 'vscode/test'];
const excludeFiles = ['index.ts'];
const excludeExtensions = ['.spec.ts', '.test.ts', '.gen.ts', 'vite.config.ts'];

async function createBarrel(directory: string) {
  const files = await fs.readdir(directory, {withFileTypes: true, recursive: true});
  const exports = files
    .filter((file) => {
      if (!file.isFile()) {
        return false;
      }

      const ext = extname(file.name);

      return (
        ext === '.ts' &&
        !excludeDirectories.some((x) => file.parentPath.includes(x)) &&
        !excludeFiles.includes(file.name) &&
        !excludeExtensions.some((x) => file.name.endsWith(x))
      );
    })
    .map((file) => {
      const relativePath = join(file.parentPath, file.name).replace(directory, '').replace(/\\/g, '/');

      return `export * from '.${relativePath.replace('.ts', '')}';`;
    })
    .sort((a, b) => a.split('/').length - b.split('/').length)
    .join('\n');

  const barrelPath = join(directory, 'index.ts');
  await fs.writeFile(barrelPath, exports + '\n');
}

async function main() {
  await Promise.all(directories.map((directory) => createBarrel(directory)));
  console.log('\x1b[32m%s\x1b[0m', 'Done!');
}

main().catch(console.error);
