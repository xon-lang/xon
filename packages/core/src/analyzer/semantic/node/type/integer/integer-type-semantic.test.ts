import {newText, newTextResource, nothing} from '#common';
import {
  $AttributeValueDeclarationSemantic,
  $IntegerTypeSemantic,
  AttributeValueDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  IntegerTypeSemantic,
  syntaxFromResource,
  TEST_SEMANTIC_CONFIG,
  typeNodeType,
} from '#core';
import {expect, test} from 'vitest';

test('a is integer', () => {
  const text = newText(`
    const a: 123
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).$).toBe(
    $AttributeValueDeclarationSemantic,
  );
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).name).toBe('a');

  const constNode = syntax.statements[0].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($AttributeValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as IntegerTypeSemantic)
    : nothing;
  expect(typeSemantic?.$).toBe($IntegerTypeSemantic);
  expect(typeSemantic?.value).toBe(123);
});
