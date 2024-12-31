import {newText, newTextResource, nothing} from '#common';
import {
  $AttributeValueDeclarationSemantic,
  $CharTypeSemantic,
  AttributeValueDeclarationSemantic,
  CharTypeSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  syntaxFromResource,
  TEST_SEMANTIC_CONFIG,
  typeNodeType,
} from '#core';
import {expect, test} from 'vitest';

test('a is string value', () => {
  const text = newText(`
    const a: 'a' = 'a'
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).$.toNativeString()).toBe(
    $AttributeValueDeclarationSemantic.toNativeString(),
  );
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).name.toNativeString()).toBe('a');

  const constNode = syntax.statements[0].value as DeclarationNode;
  expect(constNode.id?.text.toNativeString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($AttributeValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
  expect(idSemantic.name.toNativeString()).toBe('a');

  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as CharTypeSemantic)
    : nothing;
  expect(typeSemantic?.$).toBe($CharTypeSemantic);
  expect(typeSemantic?.value.toNativeString()).toBe('a');
});

test('a is string literal', () => {
  const text = newText(`
    const a: 'a`);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);
  const constNode = syntax.statements[0].value as DeclarationNode;
  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as CharTypeSemantic)
    : nothing;

  expect(typeSemantic?.$.toNativeString()).toBe($CharTypeSemantic.toNativeString());
  expect(typeSemantic?.value.toNativeString()).toBe('a');
});

test('emoji', () => {
  const text = newText(`
    const a: '👩‍❤️‍💋‍👩'
    const b: '👍'`);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  const constA = syntax.statements[0].value as DeclarationNode;
  const typeASemantic = constA.type ? (typeNodeType(semantic, constA.type) as CharTypeSemantic) : nothing;
  expect(typeASemantic?.$.toNativeString()).toBe($CharTypeSemantic.toNativeString());
  expect(typeASemantic?.value.toNativeString()).toBe('👩‍❤️‍💋‍👩');
  expect(typeASemantic?.declaration?.name.toNativeString()).toBe('Char');

  const constB = syntax.statements[1].value as DeclarationNode;
  const typeBSemantic = constB.type ? (typeNodeType(semantic, constB.type) as CharTypeSemantic) : nothing;
  expect(typeBSemantic?.$.toNativeString()).toBe($CharTypeSemantic.toNativeString());
  expect(typeBSemantic?.value.toNativeString()).toBe('👍');
});
