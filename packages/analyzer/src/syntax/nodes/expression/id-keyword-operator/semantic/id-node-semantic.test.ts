import {
  $IdNode,
  $IdTypeSemantic,
  $NominalTypeDeclarationSemantic,
  IdNode,
  IdTypeSemantic,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newNominalTypeDeclarationSemantic,
  newSemanticContext,
  parseIdKeywordOperatorNode,
} from '#analyzer';
import {newText, newTextRange, newTextReference, newUri, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Id node semantics', () => {
  const text = newText('A');
  const {semantic} = getIdNode(text);

  expect(is(semantic, $IdTypeSemantic())).toBe(true);
  expect(is((semantic as IdTypeSemantic).declaration, $NominalTypeDeclarationSemantic())).toBe(true);
  expect((semantic as IdTypeSemantic).declaration?.name.toNativeString()).toBe('A');
});

function getIdNode(text: Text): IdNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseIdKeywordOperatorNode(context) as IdNode;
  const semanticContext = newSemanticContext();
  semanticContext.scope.add(
    newNominalTypeDeclarationSemantic(newTextReference(newUri(newText()), newTextRange()), newText('A')),
  );
  node.semantify!(semanticContext);

  expect(node).toBeTruthy();
  expect(is(node, $IdNode())).toBe(true);

  return node;
}
