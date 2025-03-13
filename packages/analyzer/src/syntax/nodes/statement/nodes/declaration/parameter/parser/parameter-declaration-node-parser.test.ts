import {
  $IdNode,
  $IntegerNode,
  $ParameterDeclarationNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  ParameterDeclarationNode,
  parseParameterDeclarationNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Value declaration statement with type and assign', () => {
  const text = newText('a: Number = 1');
  const node = getValueDeclarationNode(text);

  expect(is(node.target, $IdNode())).toBe(true);
  expect(is(node.type?.value, $IdNode())).toBe(true);
  expect(is(node.assign?.value, $IntegerNode())).toBe(true);
});

function getValueDeclarationNode(text: Text): ParameterDeclarationNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseParameterDeclarationNode(0, nodes)!;

  expect(node).toBeTruthy();
  expect(is(node, $ParameterDeclarationNode())).toBe(true);
  expect(!!node.type || !!node.assign).toBe(true);

  return node;
}
