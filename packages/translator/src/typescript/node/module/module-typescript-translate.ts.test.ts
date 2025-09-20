import {newAnalyzerContext, newCharacterStreamFromText, parseModule} from '#analyzer';
import {newText} from '#common';
import {translateTypescriptModule} from '#translator';
import {expect, test} from 'vitest';

test('Translate typescript module', () => {
  const text = newText('a: "string"');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseModule(context);
  const translated = translateTypescriptModule(node);

  expect(translated.toNativeString()).toBe('let a: `string`');
});
