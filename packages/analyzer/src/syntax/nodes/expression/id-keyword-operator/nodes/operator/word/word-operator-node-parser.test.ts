import {
  $OperatorNode,
  $WordOperatorNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  OperatorNode,
  parseIdKeywordOperatorNode,
} from '#analyzer';
import {is, newText, Text} from '#core';
import {expect, test} from 'vitest';

test('Word operator as', () => {
  const text = newText('as');
  const node = operatorFromText(text);

  expect(is(node, $WordOperatorNode())).toBe(true);
  expect(node?.getText().toNativeString()).toBe('as');
});

function operatorFromText(text: Text): OperatorNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseIdKeywordOperatorNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $OperatorNode())).toBe(true);

  return node as OperatorNode;
}
