import {$ParenOpenNode, newAnalyzerContext, newCharacterStreamFromText, parseParenOpenNode} from '#analyzer';
import {is, newText} from '#core';
import {expect, test} from 'vitest';

test('open paren', () => {
  const text = newText('(');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseParenOpenNode(context);

  expect(is(node, $ParenOpenNode())).toBe(true);
  expect(node?.getText().toNativeString()).toBe('(');
});
