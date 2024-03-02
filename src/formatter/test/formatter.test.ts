import {readFileSync, readdirSync, statSync, writeFileSync} from 'fs';
import {Integer} from '../../lib/core';
import {parseSyntax} from '../../parser/syntax';

const testDir = 'src/formatter/test/';

for (const dirName of readdirSync(testDir)) {
  const isDirectory = statSync(testDir + dirName).isDirectory();

  if (!isDirectory) {
    continue;
  }

  const dirNumber = Number(dirName);

  test(dirName, () => {
    testFormatter(dirNumber);
  });
}

function testFormatter(index: Integer) {
  const dirPath = `src/formatter/test/${index}/`;
  const sourceText = readFileSync(dirPath + 'source.xon').toString();
  const etalonText = readFileSync(dirPath + 'etalon.xon').toString();
  const syntax = parseSyntax(sourceText);
  const formattedText = syntax.getFormattedText();

  writeFileSync(dirPath + 'formatted.xon', formattedText);

  expect(formattedText).toBe(etalonText);
}
