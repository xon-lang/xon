import {newAnalyzerContext, newCharacterStreamFromText, parseStatements} from '#analyzer';
import {newText} from '#common';
import {translateTypescriptStatement} from '#translator';
import {readFile, writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {expect, test} from 'vitest';

test('program 1 typescript translator', async () => {
  await getConditionStatementNode('program-1-typescript');
});

async function getConditionStatementNode(name: string): Promise<void> {
  const input = newText((await readFile(resolve(__dirname, name + '-input.xon'))).toString());
  const source = newCharacterStreamFromText(input);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);

  const output = readFile(resolve(__dirname, name + '-etalon.ts'));
  const translated = newText(statements.map(translateTypescriptStatement), newText('\n\n')).toNativeString();
  writeFile(resolve(__dirname, name + '-output.ts'), translated);

  expect(translated).toBe((await output).toString());
}
