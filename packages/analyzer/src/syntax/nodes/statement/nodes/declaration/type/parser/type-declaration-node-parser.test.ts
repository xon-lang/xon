// import {
//   $AssignValueNode,
//   $IdNode,
//   $IntegerNode,
//   $NominalTypeDeclarationNode,
//   $StructuralTypeDeclarationNode,
//   $TypeKeywordNode,
//   $TypeValueNode,
//   IdNode,
//   IntegerNode,
//   newAnalyzerContext,
//   newCharacterStreamFromText,
//   NominalTypeDeclarationNode,
//   nonHiddenNodeGenerator,
//   parseTypeDeclarationNode,
//   StructuralTypeDeclarationNode,
//   TypeDeclarationNode,
// } from '#analyzer';
// import {newArrayData, newText, Text} from '#common';
// import {is} from '#typing';
// import {expect, test} from 'vitest';

// test('Nominal type declaration id and base type', () => {
//   const text = newText('type Zero: Integer');
//   const node = getTypeDeclarationNode(text) as NominalTypeDeclarationNode;

//   expect(is(node, $NominalTypeDeclarationNode())).toBe(true);
//   expect(node.id.text.toNativeString()).toBe('Zero');
//   expect(is(node.type, $TypeValueNode())).toBe(true);
//   expect(is(node.type?.value, $IdNode())).toBe(true);
//   expect((node.type?.value as IdNode).text.toNativeString()).toBe('Integer');

//   expect(is(node.id, $IdNode())).toBe(true);
// });

// test('Structural type declaration id and assign', () => {
//   const text = newText('type Zero = 0');
//   const node = getTypeDeclarationNode(text) as StructuralTypeDeclarationNode;

//   expect(is(node, $StructuralTypeDeclarationNode())).toBe(true);
//   expect(node.id.text.toNativeString()).toBe('Zero');
//   expect(is(node.assign, $AssignValueNode())).toBe(true);
//   expect(is(node.assign?.value, $IntegerNode())).toBe(true);
//   expect((node.assign?.value as IntegerNode).contentNode.text.toNativeString()).toBe('0');
// });

// function getTypeDeclarationNode(text: Text): TypeDeclarationNode {
//   const source = newCharacterStreamFromText(text);
//   const context = newAnalyzerContext(source);
//   const nodes = newArrayData(nonHiddenNodeGenerator(context));
//   const node = parseTypeDeclarationNode(0, nodes) as TypeDeclarationNode;

//   expect(node).toBeTruthy();
//   expect(is(node.keyword, $TypeKeywordNode())).toBe(true);
//   expect(node.keyword.text.toNativeString()).toBe('type');

//   return node;
// }
