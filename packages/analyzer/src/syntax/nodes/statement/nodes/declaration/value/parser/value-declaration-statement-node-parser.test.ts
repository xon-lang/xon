import {
  $IdNode,
  $IntegerNode,
  $ValueDeclarationStatementNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseValueDeclarationStatementNode,
  ValueDeclarationStatementNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Value declaration statement with type and assign', () => {
  const text = newText('a: Number = 1');
  const node = getValueDeclarationStatementNode(text);

  expect(is(node.target, $IdNode())).toBe(true);
  expect(is(node.type?.value, $IdNode())).toBe(true);
  expect(is(node.assign?.value, $IntegerNode())).toBe(true);
});

function getValueDeclarationStatementNode(text: Text): ValueDeclarationStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseValueDeclarationStatementNode(0, nodes)!;

  expect(node).toBeTruthy();
  expect(is(node, $ValueDeclarationStatementNode())).toBe(true);
  expect(!!node.type || !!node.assign).toBe(true);

  return node;
}
