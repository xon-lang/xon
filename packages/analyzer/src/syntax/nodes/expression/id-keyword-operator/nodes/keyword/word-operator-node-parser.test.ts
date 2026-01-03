import {
  $ControlKeywordNode,
  $KeywordNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  OperatorNode,
  parseIdKeywordOperatorNode,
} from '#analyzer';
import {is, newText, Text} from '#core';
import {expect, test} from 'vitest';

test('Control operator return', () => {
  const text = newText('return');
  const node = operatorFromText(text);

  expect(is(node, $ControlKeywordNode())).toBe(true);
  expect(node?.getText().toNativeString()).toBe('return');
});

function operatorFromText(text: Text): OperatorNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseIdKeywordOperatorNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $KeywordNode())).toBe(true);

  return node as OperatorNode;
}
