import {
  $ParenCloseNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseParenCloseNode,
} from '#analyzer';
import {is, newText} from '#core';
import {expect, test} from 'vitest';

test('close paren', () => {
  const text = newText(')');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseParenCloseNode(context);

  expect(is(node, $ParenCloseNode())).toBe(true);
  expect(node?.getText().toNativeString()).toBe(')');
});
