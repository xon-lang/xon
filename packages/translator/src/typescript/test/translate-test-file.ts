import {newAnalyzerContext, newCharacterStreamFromText, newSemanticContext, parseModule} from '#analyzer';
import {newText} from '#core';
import {newTypescriptTranslator} from '#translator';
import {readFile, writeFile} from 'node:fs/promises';
import {join, resolve} from 'node:path';
import {expect} from 'vitest';

export async function translateTestFile(name: string): Promise<void> {
  const dirPath = join(__dirname, name);
  const input = newText((await readFile(resolve(dirPath, name + '-input.xon'))).toString());
  const source = newCharacterStreamFromText(input);
  const syntaxContext = newAnalyzerContext(source);
  const moduleNode = parseModule(syntaxContext);

  const semanticContext = newSemanticContext(null, syntaxContext.diagnostic);
  moduleNode.semantify(semanticContext);

  const translator = newTypescriptTranslator();
  const translated = translator.translateModule(moduleNode).toNativeString();

  const output = readFile(resolve(dirPath, name + '-etalon.ts'));
  writeFile(resolve(dirPath, name + '-output.ts'), translated);

  expect(translated).toBe((await output).toString());
}
