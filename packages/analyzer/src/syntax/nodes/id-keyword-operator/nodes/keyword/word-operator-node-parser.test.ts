import {
  $ControlKeywordNode,
  $DeclarationKeywordNode,
  $KeywordNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  OperatorNode,
  parseIdKeywordOperatorNode,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Control operator return', () => {
  const text = newText('return');
  const node = operatorFromText(text);

  expect(is(node, $ControlKeywordNode())).toBe(true);
  expect(node?.text.toNativeString()).toBe('return');
});

test('Modifier operator const', () => {
  const text = newText('const');
  const node = operatorFromText(text);

  expect(is(node, $DeclarationKeywordNode())).toBe(true);
  expect(node?.text.toNativeString()).toBe('const');
});

function operatorFromText(text: Text): OperatorNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseIdKeywordOperatorNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $KeywordNode())).toBe(true);

  return node as OperatorNode;
}
