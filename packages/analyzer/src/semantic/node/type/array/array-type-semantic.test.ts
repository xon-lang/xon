import {
  $ArrayTypeSemantic,
  $AttributeValueDeclarationSemantic,
  ArrayTypeSemantic,
  AttributeValueDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  IntegerTypeSemantic,
  StringTypeSemantic,
  syntaxFromResource,
  TEST_SEMANTIC_CONFIG,
  typeNodeType,
} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('a is array', () => {
  const text = newText(`
    const a: [1, 2, "A"]
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).$).toBe(
    $AttributeValueDeclarationSemantic,
  );
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).name.toNativeString()).toBe('a');

  const constNode = syntax.statements.at(0)?.value as DeclarationNode;
  expect(constNode.id?.text.toNativeString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($AttributeValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
  expect(idSemantic.name.toNativeString()).toBe('a');

  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as ArrayTypeSemantic)
    : nothing;
  expect(typeSemantic?.$.toNativeString()).toBe($ArrayTypeSemantic.toNativeString());
  expect(typeSemantic?.items.count()).toBe(3);
  expect((typeSemantic?.items.at(0) as IntegerTypeSemantic).value).toBe(1);
  expect((typeSemantic?.items.at(1) as IntegerTypeSemantic).value).toBe(2);
  expect((typeSemantic?.items.at(2) as StringTypeSemantic).value.toNativeString()).toBe('A');
});
