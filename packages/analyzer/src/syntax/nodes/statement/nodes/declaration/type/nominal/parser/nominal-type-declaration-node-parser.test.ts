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
  parseNominalTypeDeclarationNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Nominal type declaration id and base type', () => {
  const text = newText('type Zero: Integer');
  const node = getNominalTypeDeclarationNode(text);

  expect(node.id.text.toNativeString()).toBe('Zero');
  expect(is(node.type?.value, $IdNode())).toBe(true);
  expect((node.type?.value as IdNode).text.toNativeString()).toBe('Integer');
});

function getNominalTypeDeclarationNode(text: Text): NominalTypeDeclarationNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseNominalTypeDeclarationNode(0, nodes) as NominalTypeDeclarationNode;

  expect(node).toBeTruthy();
  expect(is(node, $NominalTypeDeclarationNode())).toBe(true);
  expect(is(node.keyword, $TypeKeywordNode())).toBe(true);
  expect(node.keyword.text.toNativeString()).toBe('type');
  expect(is(node.id, $IdNode())).toBe(true);
  expect(is(node.type, $TypeValueNode())).toBe(true);

  return node;
}
