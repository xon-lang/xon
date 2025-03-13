import {
  $IdNode,
  $TypeDeclarationNode,
  $TypeKeywordNode,
  $TypeValueNode,
  IdNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseTypeDeclarationNode,
  TypeDeclarationNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Type declaration id and base type', () => {
  const text = newText('type Zero: Integer');
  const node = getTNominalTypeDeclarationNode(text) as TypeDeclarationNode;

  expect(is(node, $TypeDeclarationNode())).toBe(true);
  expect(node.id.text.toNativeString()).toBe('Zero');
  expect(is(node.type, $TypeValueNode())).toBe(true);
  expect(is(node.type?.value, $IdNode())).toBe(true);
  expect((node.type?.value as IdNode).text.toNativeString()).toBe('Integer');

  expect(is(node.id, $IdNode())).toBe(true);
});

function getTNominalTypeDeclarationNode(text: Text): TypeDeclarationNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseTypeDeclarationNode(0, nodes) as TypeDeclarationNode;

  expect(node).toBeTruthy();
  expect(is(node.keyword, $TypeKeywordNode())).toBe(true);
  expect(node.keyword.text.toNativeString()).toBe('type');

  return node;
}
