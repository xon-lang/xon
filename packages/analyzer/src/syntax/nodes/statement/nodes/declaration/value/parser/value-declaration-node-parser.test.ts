import {
  $IdNode,
  $IntegerNode,
  $ValueDeclarationNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseParameterDeclarationNode,
  ValueDeclarationNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Value declaration statement with type and assign', () => {
  const text = newText('a: Number = 1');
  const node = getValueDeclarationNode(text);

  expect(is(node.id, $IdNode())).toBe(true);
  expect(is(node.type?.value, $IdNode())).toBe(true);
  expect(is(node.assign?.value, $IntegerNode())).toBe(true);
});

function getValueDeclarationNode(text: Text): ValueDeclarationNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseParameterDeclarationNode(0, nodes)!;

  expect(node).toBeTruthy();
  expect(is(node, $ValueDeclarationNode())).toBe(true);
  expect(!!node.type || !!node.assign).toBe(true);

  return node;
}
