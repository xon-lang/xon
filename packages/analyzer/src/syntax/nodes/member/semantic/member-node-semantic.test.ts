import {
  $MemberNode,
  $UsageTypeSemantic,
  collapseMemberNode,
  MemberNode,
  newAnalyzerContext,
  newAttributeDeclarationSemantic,
  newAttributeList,
  newCharacterStreamFromText,
  newObjectTypeSemantic,
  newSemanticContext,
  newVariableValueDeclarationSemantic,
  nonHiddenNodeGenerator,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Member node semantics', () => {
  const text = newText('user.name');
  const {instance, id, semantic} = getMemberNode(text);

  expect(is(instance.semantic, $UsageTypeSemantic())).toBe(true);
  expect(is(id?.semantic, $UsageTypeSemantic())).toBe(true);
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
            newAttributeDeclarationSemantic(newText('name')),
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
