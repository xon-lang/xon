import {
  $AttributeDeclarationSemantic,
  $IntegerTypeSemantic,
  AttributeDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  IntegerTypeSemantic,
  syntaxFromResource,
  TEST_SEMANTIC_CONFIG,
  typeNodeType,
} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('a is integer', () => {
  const text = newText(`
    const a: 123
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).$.toNativeString()).toBe(
    $AttributeDeclarationSemantic().toNativeString(),
  );
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).name.toNativeString()).toBe('a');

  const constNode = syntax.statements.at(0)?.value as DeclarationNode;
  expect(constNode.id?.text.toNativeString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($AttributeDeclarationSemantic());

  const idSemantic = constNode.id?.semantic as AttributeDeclarationSemantic;
  expect(idSemantic.name.toNativeString()).toBe('a');

  const typeSemantic = constNode.annotation
    ? (typeNodeType(semantic, constNode.annotation) as IntegerTypeSemantic)
    : nothing;
  expect(typeSemantic?.$.toNativeString()).toBe($IntegerTypeSemantic().toNativeString());
  expect(typeSemantic?.value).toBe(123);
});
