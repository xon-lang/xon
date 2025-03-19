import {
  $DeclarationNode,
  $IdNode,
  $IntegerNode,
  $OperatorExpressionNode,
  DeclarationNode,
  IdNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseDeclarationNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Value declaration statement with type and assign', () => {
  const text = newText('a: Number = 1');
  const node = getDeclarationNode(text);

  expect(is(node.id, $IdNode())).toBe(true);
  expect(is(node.type?.expression, $IdNode())).toBe(true);
  expect(is(node.value?.expression, $IntegerNode())).toBe(true);
});

test('Type alias declaration statement with type and assign', () => {
  const text = newText('type Zero = 0');
  const node = getDeclarationNode(text);

  expect(node.keyword?.text.toNativeString()).toBe('type');
  expect(is(node.id, $IdNode())).toBe(true);
  expect(node.id.text.toNativeString()).toBe('Zero');
  expect(node.type).toBeFalsy();
  expect(is(node.value?.expression, $IntegerNode())).toBe(true);
  expect((node.value?.expression as IntegerNode).contentNode.text.toNativeString()).toBe('0');
});

test('Type declaration id and base type', () => {
  const text = newText('type Zero: Integer');
  const node = getDeclarationNode(text) as DeclarationNode;

  expect(is(node, $DeclarationNode())).toBe(true);
  expect(node.id.text.toNativeString()).toBe('Zero');
  expect(is(node.type, $OperatorExpressionNode())).toBe(true);
  expect(is(node.type?.expression, $IdNode())).toBe(true);
  expect((node.type?.expression as IdNode).text.toNativeString()).toBe('Integer');

  expect(is(node.id, $IdNode())).toBe(true);
});

function getDeclarationNode(text: Text): DeclarationNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseDeclarationNode(0, nodes)!;

  expect(node).toBeTruthy();
  expect(is(node, $DeclarationNode())).toBe(true);
  expect(!!node.type || !!node.value).toBe(true);

  return node;
}
