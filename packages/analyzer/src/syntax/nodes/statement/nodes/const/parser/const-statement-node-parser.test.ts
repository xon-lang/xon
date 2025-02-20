import {
  $ConstKeywordNode,
  $ConstStatementNode,
  $IdNode,
  $IntegerNode,
  ConstStatementNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseConstStatementNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Const statement with type and assign', () => {
  const text = newText('const a: Number = 1');
  const node = getConstStatementNode(text);

  expect(is(node.target, $IdNode())).toBe(true);
  expect(is(node.type?.value, $IdNode())).toBe(true);
  expect(is(node.assign?.value, $IntegerNode())).toBe(true);
});

function getConstStatementNode(text: Text): ConstStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseConstStatementNode(0, nodes)!;

  expect(node).toBeTruthy();
  expect(is(node, $ConstStatementNode())).toBe(true);
  expect(is(node.keywordNode, $ConstKeywordNode())).toBe(true);
  expect(node.keywordNode.text.toNativeString()).toBe('const');

  return node;
}
