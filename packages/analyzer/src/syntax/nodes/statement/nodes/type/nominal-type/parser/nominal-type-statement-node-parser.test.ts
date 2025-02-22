import {
  $IdNode,
  $NominalTypeStatementNode,
  $TypeKeywordNode,
  $TypeValueNode,
  IdNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  NominalTypeStatementNode,
  nonHiddenNodeGenerator,
  parseNominalTypeStatementNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('NominalType statement id and base type', () => {
  const text = newText('type Zero: Integer');
  const node = getNominalTypeStatementNode(text);

  expect(node.id.text.toNativeString()).toBe('Zero');
  expect(is(node.type?.value, $IdNode())).toBe(true);
  expect((node.type?.value as IdNode).text.toNativeString()).toBe('Integer');
});

function getNominalTypeStatementNode(text: Text): NominalTypeStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseNominalTypeStatementNode(0, nodes) as NominalTypeStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $NominalTypeStatementNode())).toBe(true);
  expect(is(node.keyword, $TypeKeywordNode())).toBe(true);
  expect(node.keyword.text.toNativeString()).toBe('type');
  expect(is(node.id, $IdNode())).toBe(true);
  expect(is(node.type, $TypeValueNode())).toBe(true);

  return node;
}
