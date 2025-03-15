import {
  $IdTypeSemantic,
  $NominalTypeDeclarationSemantic,
  IdTypeSemantic,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newSemanticContext,
  NominalTypeDeclarationSemantic,
  nonHiddenNodeGenerator,
  parseTypeDeclarationNode,
  TypeDeclarationNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Integer declaration type', () => {
  const text = newText('type Integer: Number');
  const semantic = getTypeDeclarationNode(text);

  expect(semantic.name.toNativeString()).toBe('Integer');
  expect(is(semantic.extendsType, $IdTypeSemantic())).toBe(true);
  expect((semantic.extendsType as IdTypeSemantic).name.toNativeString()).toBe('Number');
});

function getTypeDeclarationNode(text: Text): NominalTypeDeclarationSemantic {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseTypeDeclarationNode(0, nodes) as TypeDeclarationNode;
  const semanticContext = newSemanticContext();
  node.semantify!(semanticContext);

  expect(is(node.semantic, $NominalTypeDeclarationSemantic())).toBe(true);
  expect(is(node.id.semantic, $NominalTypeDeclarationSemantic())).toBe(true);
  expect(semanticContext.scope.get(newText('Integer'))?.name.toNativeString()).toBe('Integer');

  return node.semantic!;
}
