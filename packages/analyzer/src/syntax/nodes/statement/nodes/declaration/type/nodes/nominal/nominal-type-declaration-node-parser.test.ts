import {
  $IdNode,
  $NominalTypeDeclarationNode,
  $TypeKeywordNode,
  $TypeValueNode,
  IdNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  NominalTypeDeclarationNode,
  nonHiddenNodeGenerator,
  parseTypeDeclarationNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Nominal type declaration id and base type', () => {
  const text = newText('type Zero: Integer');
  const node = getTNominalTypeDeclarationNode(text) as NominalTypeDeclarationNode;

  expect(is(node, $NominalTypeDeclarationNode())).toBe(true);
  expect(node.id.text.toNativeString()).toBe('Zero');
  expect(is(node.type, $TypeValueNode())).toBe(true);
  expect(is(node.type?.value, $IdNode())).toBe(true);
  expect((node.type?.value as IdNode).text.toNativeString()).toBe('Integer');

  expect(is(node.id, $IdNode())).toBe(true);
});

function getTNominalTypeDeclarationNode(text: Text): NominalTypeDeclarationNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseTypeDeclarationNode(0, nodes) as NominalTypeDeclarationNode;

  expect(node).toBeTruthy();
  expect(is(node.keyword, $TypeKeywordNode())).toBe(true);
  expect(node.keyword.text.toNativeString()).toBe('type');

  return node;
}
