// import {
//   $AttributeDeclarationSemantic,
//   $MemberNode,
//   $StringSemantic,
//   $UsageSemantic,
//   collapseMemberNode,
//   MemberNode,
//   newAnalyzerContext,
//   newAttributeDeclarationSemantic,
//   newCharacterStreamFromText,
//   newObjectTypeSemantic,
//   newSemanticContext,
//   newSemanticScope,
//   newStringSemantic,
//   newVariableValueDeclarationSemantic,
//   nonHiddenNodeGenerator,
//   StringSemantic,
// } from '#analyzer';
// import {newArrayData, newText, newTextRange, newTextReference, newUri, nothing, Text} from '#core';
// import {$Model, is} from '#core';
// import {expect, test} from 'vitest';

// test('Member node semantics', () => {
//   const text = newText('user.name');
//   const node = getMemberNode(text);

//   expect(is(node.instance.semantic, $UsageSemantic())).toBe(true);
//   expect(node.id?.semantic).toBeTruthy();
//   expect(is(node.id?.semantic, $UsageSemantic())).toBe(true);
//   expect(is(node.semantic, $StringSemantic())).toBe(true);
//   expect((node.semantic as StringSemantic).value.toNativeString()).toBe('John');
// });

// function getMemberNode(text: Text): MemberNode {
//   const source = newCharacterStreamFromText(text);
//   const context = newAnalyzerContext(source);
//   const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
//   const node = collapseMemberNode(context).collapse(nodes, 0)?.node as MemberNode;
//   const semanticContext = newSemanticContext();

//   semanticContext.scope.add(
//     newVariableValueDeclarationSemantic(
//       semanticContext.getReference(newTextRange()),
//       newText('user'),
//       newObjectTypeSemantic(
//         newSemanticScope(
//           newArrayData($AttributeDeclarationSemantic(), [
//             newAttributeDeclarationSemantic(
//               newTextReference(newUri(newText('test')), newTextRange()),
//               nothing,
//               newText('name'),
//               newStringSemantic(newText('John')),
//             ),
//             newAttributeDeclarationSemantic(
//               newTextReference(newUri(newText('test')), newTextRange()),
//               nothing,
//               newText('age'),
//             ),
//           ]),
//         ),
//       ),
//     ),
//   );

//   node.semantify!(semanticContext);

//   expect(node).toBeTruthy();
//   expect(is(node, $MemberNode())).toBe(true);

//   return node;
// }
