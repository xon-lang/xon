import {
  $AssignValueNode,
  $IdNode,
  $IntegerNode,
  $StructuralTypeStatementNode,
  $TypeKeywordNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseStructuralTypeStatementNode,
  StructuralTypeStatementNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('StructuralType statement id and assign', () => {
  const text = newText('type Zero = 0');
  const node = getStructuralTypeStatementNode(text);

  expect(node.id.text.toNativeString()).toBe('Zero');
  expect(is(node.assign?.value, $IntegerNode())).toBe(true);
  expect((node.assign?.value as IntegerNode).contentNode.text.toNativeString()).toBe('0');
});

function getStructuralTypeStatementNode(text: Text): StructuralTypeStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseStructuralTypeStatementNode(0, nodes) as StructuralTypeStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $StructuralTypeStatementNode())).toBe(true);
  expect(is(node.keyword, $TypeKeywordNode())).toBe(true);
  expect(node.keyword.text.toNativeString()).toBe('type');
  expect(is(node.id, $IdNode())).toBe(true);
  expect(is(node.assign, $AssignValueNode())).toBe(true);

  return node;
}
