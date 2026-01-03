import {
  $BracketOpenNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseBracketOpenNode,
} from '#analyzer';
import {is, newText} from '#core';
import {expect, test} from 'vitest';

test('open bracket', () => {
  const text = newText('[');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseBracketOpenNode(context);

  expect(is(node, $BracketOpenNode())).toBe(true);
  expect(node?.getText().toNativeString()).toBe('[');
});
