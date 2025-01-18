import {$WhitespaceNode, newAnalyzerContext, parseWhitespaceNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('whitespace', () => {
  const text = newText('    ');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseWhitespaceNode(context);

  expect(is(node, $WhitespaceNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('    ');
});
