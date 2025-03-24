import {
  $DeclarationStatementNode,
  $IdNode,
  $IntegerNode,
  $OperatorExpressionNode,
  $ParenGroupNode,
  DeclarationStatementNode,
  IdNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseDeclarationStatementNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Value declaration statement with type and assign', () => {
  const text = newText('a: Number = 1');
  const node = getDeclarationStatementNode(text);

  expect(is(node.id, $IdNode())).toBe(true);
  expect(is(node.annotation?.expression, $IdNode())).toBe(true);
  expect(is(node.assignment?.expression, $IntegerNode())).toBe(true);
});

test('Type alias declaration statement with type and assign', () => {
  const text = newText('type Zero = 0');
  const node = getDeclarationStatementNode(text);

  expect(node.keyword?.text.toNativeString()).toBe('type');
  expect(is(node.id, $IdNode())).toBe(true);
  expect(node.id.text.toNativeString()).toBe('Zero');
  expect(node.annotation).toBeFalsy();
  expect(is(node.assignment?.expression, $IntegerNode())).toBe(true);
  expect((node.assignment?.expression as IntegerNode).contentNode.text.toNativeString()).toBe('0');
});

test('Type declaration id and base type', () => {
  const text = newText('type Zero: Integer');
  const node = getDeclarationStatementNode(text) as DeclarationStatementNode;

  expect(is(node, $DeclarationStatementNode())).toBe(true);
  expect(node.id.text.toNativeString()).toBe('Zero');
  expect(is(node.annotation, $OperatorExpressionNode())).toBe(true);
  expect(is(node.annotation?.expression, $IdNode())).toBe(true);
  expect((node.annotation?.expression as IdNode).text.toNativeString()).toBe('Integer');

  expect(is(node.id, $IdNode())).toBe(true);
});

test('Function declaration', () => {
  const text = newText('f(a: Integer): Float');
  const node = getDeclarationStatementNode(text) as DeclarationStatementNode;

  expect(node.id.text.toNativeString()).toBe('f');
  expect(is(node.parameters, $ParenGroupNode())).toBe(true);
  expect(node.parameters?.items.count()).toBe(1);
  expect(is(node.parameters?.items.at(0)?.statement, $DeclarationStatementNode())).toBe(true);
  expect(is(node.annotation, $OperatorExpressionNode())).toBe(true);
  expect(is(node.annotation?.expression, $IdNode())).toBe(true);
  expect((node.annotation?.expression as IdNode).text.toNativeString()).toBe('Float');

  expect(is(node.id, $IdNode())).toBe(true);
});

function getDeclarationStatementNode(text: Text): DeclarationStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseDeclarationStatementNode(0, nodes)!;

  expect(node).toBeTruthy();
  expect(is(node, $DeclarationStatementNode())).toBe(true);
  expect(!!node.annotation || !!node.assignment).toBe(true);

  return node;
}
