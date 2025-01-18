import {$BracketOpenNode, newAnalyzerContext, parseBracketOpenNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('open bracket', () => {
  const text = newText('[');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseBracketOpenNode(context);

  expect(is(node, $BracketOpenNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('[');
});
