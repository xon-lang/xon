import {$BraceOpenNode, newAnalyzerContext, newCharacterStreamFromText, parseBraceOpenNode} from '#analyzer';
import {is, newText} from '#core';
import {expect, test} from 'vitest';

test('open brace', () => {
  const text = newText('{');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseBraceOpenNode(context);

  expect(is(node, $BraceOpenNode())).toBe(true);
  expect(node?.text.toNativeString()).toBe('{');
});
