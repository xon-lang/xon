import {
  $IdTypeSemantic,
  $MemberNode,
  $StringTypeSemantic,
  collapseMemberNode,
  MemberNode,
  newAnalyzerContext,
  newAttributeDeclarationSemantic,
  newAttributeList,
  newCharacterStreamFromText,
  newObjectTypeSemantic,
  newSemanticContext,
  newStringTypeSemantic,
  newVariableValueDeclarationSemantic,
  nonHiddenNodeGenerator,
  StringTypeSemantic,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Member node semantics', () => {
  const text = newText('user.name');
  const node = getMemberNode(text);

  expect(is(node.instance.semantic, $IdTypeSemantic())).toBe(true);
  expect(node.id?.semantic).toBeTruthy();
  expect(is(node.id?.semantic, $IdTypeSemantic())).toBe(true);
  expect(is(node.semantic, $StringTypeSemantic())).toBe(true);
  expect((node.semantic as StringTypeSemantic).value.toNativeString()).toBe('John');
});

function getMemberNode(text: Text): MemberNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = collapseMemberNode(nodes, 0)?.node as MemberNode;
  const semanticContext = newSemanticContext();

  semanticContext.scope.add(
    newVariableValueDeclarationSemantic(
      newText('user'),
      newObjectTypeSemantic(
        newAttributeList(
          newArrayData([
            newAttributeDeclarationSemantic(newText('name'), newStringTypeSemantic(newText('John'))),
            newAttributeDeclarationSemantic(newText('age')),
          ]),
        ),
      ),
    ),
  );

  node.semantify!(semanticContext);

  expect(node).toBeTruthy();
  expect(is(node, $MemberNode())).toBe(true);

  return node;
}
