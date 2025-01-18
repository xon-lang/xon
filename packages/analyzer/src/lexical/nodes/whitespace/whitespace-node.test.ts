import {
  $WhitespaceNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseWhitespaceNode,
} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('whitespace', () => {
  const text = newText('    ');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseWhitespaceNode(context);

  expect(is(node, $WhitespaceNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('    ');
});
