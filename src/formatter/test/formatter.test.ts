import {readFileSync, writeFileSync} from 'fs';
import {parseSyntax} from '../../parser/syntax';

test('1', () => {
  const dirPath = 'src/formatter/test/1/';
  const sourceText = readFileSync(dirPath + 'source.xon').toString();
  const etalonText = readFileSync(dirPath + 'etalon.xon').toString();
  const syntax = parseSyntax(sourceText);
  const formattedText = syntax.getFormattedText();

  writeFileSync(dirPath + 'formatted.xon', formattedText);

  expect(formattedText).toBe(etalonText);
});
