import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';
import { getSourceTranslator } from '../translator/typescript/source/source-translator-helper';
import { parseSourceFile } from './parse';

const sourceDir = 'src/**/*[!draft].xon';
const cmdParam = process.argv[2];
for (const xonPath of glob.sync(sourceDir)) {
  if (!cmdParam || !xonPath.includes(cmdParam)) {
    continue;
  }
  const stat = fs.lstatSync(xonPath);
  if (path.dirname(xonPath).endsWith('test-files') || stat.isDirectory()) continue;
  const tree = parseSourceFile(xonPath);
  const translator = getSourceTranslator(tree);
  const destPath = path.resolve(path.dirname(xonPath), path.basename(xonPath, '.xon') + '.ts');
  fs.writeFileSync(destPath, translator.toString());
  console.log(destPath);
}
