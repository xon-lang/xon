import {$ParenOpenNode, newAnalyzerContext, parseParenOpenNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('open paren', () => {
  const text = newText('(');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseParenOpenNode(context);

  expect(is(node, $ParenOpenNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('(');
});
