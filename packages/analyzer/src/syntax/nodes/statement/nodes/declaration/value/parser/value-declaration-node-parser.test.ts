import {
  $IdNode,
  $IntegerNode,
  $ValueDeclarationNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseValueDeclarationNode,
  ValueDeclarationNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Value declaration statement with type and assign', () => {
  const text = newText('a: Number = 1');
  const node = getValueDeclarationNode(text);

  expect(is(node.id, $IdNode())).toBe(true);
  expect(is(node.type?.expression, $IdNode())).toBe(true);
  expect(is(node.value?.expression, $IntegerNode())).toBe(true);
});

test('Type alias declaration statement with type and assign', () => {
  const text = newText('type Zero = 0');
  const node = getValueDeclarationNode(text);

  expect(node.keyword?.text.toNativeString()).toBe('type');
  expect(is(node.id, $IdNode())).toBe(true);
  expect(node.id.text.toNativeString()).toBe('Zero');
  expect(node.type).toBeFalsy();
  expect(is(node.value?.expression, $IntegerNode())).toBe(true);
  expect((node.value?.expression as IntegerNode).contentNode.text.toNativeString()).toBe('0');
});

function getValueDeclarationNode(text: Text): ValueDeclarationNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseValueDeclarationNode(0, nodes)!;

  expect(node).toBeTruthy();
  expect(is(node, $ValueDeclarationNode())).toBe(true);
  expect(!!node.type || !!node.value).toBe(true);

  return node;
}
