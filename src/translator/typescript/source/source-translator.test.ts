import * as fs from 'fs';
import { SourceTree } from '../../../tree/source/source-tree';
import { parseSourceFile } from '../../../util/parse';
import { SourceTranslator } from './source-translator';
import { getSourceTranslator } from './source-translator-helper';

test('1.xon', () => {
  const tree = parseSourceFile('src/tree/source/test-files/1.xon');
  const translator = getSourceTranslator(tree);

  expect(translator).toBeInstanceOf(SourceTranslator);
  const translated = translator.toString();
  fs.writeFileSync('src/translator/typescript/source/test-files/1.ts', translated);
  // expect(code).toBe(translated);
});
