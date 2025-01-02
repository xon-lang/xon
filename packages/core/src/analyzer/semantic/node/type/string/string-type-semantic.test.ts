import {newText, newTextResource, nothing} from '#common';
import {
  $AttributeValueDeclarationSemantic,
  $StringTypeSemantic,
  AttributeValueDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  StringTypeSemantic,
  syntaxFromResource,
  TEST_SEMANTIC_CONFIG,
  typeNodeType,
} from '#core';
import {expect, test} from 'vitest';

test('a is string value', () => {
  const text = newText(`
    const a: "abc" = "abc"
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).$.toNativeString()).toBe(
    $AttributeValueDeclarationSemantic.toNativeString(),
  );
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).name.toNativeString()).toBe('a');

  const constNode = syntax.statements.at(0)?.value as DeclarationNode;
  expect(constNode.id?.text.toNativeString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($AttributeValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
  expect(idSemantic.name.toNativeString()).toBe('a');

  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as StringTypeSemantic)
    : nothing;
  expect(typeSemantic?.$.toNativeString()).toBe($StringTypeSemantic.toNativeString());
  expect(typeSemantic?.value.toNativeString()).toBe('abc');
});

test('a is string literal', () => {
  const text = newText(`
    const a: "abc`);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);
  const constNode = syntax.statements.at(0)?.value as DeclarationNode;
  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as StringTypeSemantic)
    : nothing;

  expect(typeSemantic?.$).toBe($StringTypeSemantic);
  expect(typeSemantic?.value.toNativeString()).toBe('abc');
});

test('a is empty string 1', () => {
  const text = newText(`
    const a: "`);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);
  const constNode = syntax.statements.at(0)?.value as DeclarationNode;
  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as StringTypeSemantic)
    : nothing;

  expect(typeSemantic?.$.toNativeString()).toBe($StringTypeSemantic.toNativeString());
  expect(typeSemantic?.value.toNativeString()).toBe('');
});

test('a is empty string 2', () => {
  const text = newText(`
    const a: ""`);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);
  const constNode = syntax.statements.at(0)?.value as DeclarationNode;
  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as StringTypeSemantic)
    : nothing;

  expect(typeSemantic?.$.toNativeString()).toBe($StringTypeSemantic.toNativeString());
  expect(typeSemantic?.value.toNativeString()).toBe('');
});
