import {
  $AssignValueNode,
  $IdNode,
  $IntegerNode,
  $StructuralTypeDeclarationNode,
  $TypeKeywordNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseStructuralTypeDeclarationNode,
  StructuralTypeDeclarationNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Structural type declaration id and assign', () => {
  const text = newText('type Zero = 0');
  const node = getStructuralTypeDeclarationNode(text);

  expect(node.id.text.toNativeString()).toBe('Zero');
  expect(is(node.assign?.value, $IntegerNode())).toBe(true);
  expect((node.assign?.value as IntegerNode).contentNode.text.toNativeString()).toBe('0');
});

function getStructuralTypeDeclarationNode(text: Text): StructuralTypeDeclarationNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseStructuralTypeDeclarationNode(0, nodes) as StructuralTypeDeclarationNode;

  expect(node).toBeTruthy();
  expect(is(node, $StructuralTypeDeclarationNode())).toBe(true);
  expect(is(node.keyword, $TypeKeywordNode())).toBe(true);
  expect(node.keyword.text.toNativeString()).toBe('type');
  expect(is(node.id, $IdNode())).toBe(true);
  expect(is(node.assign, $AssignValueNode())).toBe(true);

  return node;
}
