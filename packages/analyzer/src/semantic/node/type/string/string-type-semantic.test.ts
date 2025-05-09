import {
  $AttributeDeclarationSemantic,
  $StringTypeSemantic,
  AttributeDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationStatementNode,
  StringTypeSemantic,
  syntaxFromResource,
  TEST_SEMANTIC_CONFIG,
  typeNodeType,
} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
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
    $AttributeDeclarationSemantic().toNativeString(),
  );
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).name.toNativeString()).toBe('a');

  const constNode = syntax.statements.at(0)?.value as DeclarationStatementNode;
  expect(constNode.id?.text.toNativeString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($AttributeDeclarationSemantic());

  const idSemantic = constNode.id?.semantic as AttributeDeclarationSemantic;
  expect(idSemantic.name.toNativeString()).toBe('a');

  const typeSemantic = constNode.annotation
    ? (typeNodeType(semantic, constNode.annotation) as StringTypeSemantic)
    : nothing;
  expect(typeSemantic?.$.toNativeString()).toBe($StringTypeSemantic().toNativeString());
  expect(typeSemantic?.value.toNativeString()).toBe('abc');
});

test('a is string literal', () => {
  const text = newText(`
    const a: "abc`);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);
  const constNode = syntax.statements.at(0)?.value as DeclarationStatementNode;
  const typeSemantic = constNode.annotation
    ? (typeNodeType(semantic, constNode.annotation) as StringTypeSemantic)
    : nothing;

  expect(typeSemantic?.$).toBe($StringTypeSemantic());
  expect(typeSemantic?.value.toNativeString()).toBe('abc');
});

test('a is empty string 1', () => {
  const text = newText(`
    const a: "`);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);
  const constNode = syntax.statements.at(0)?.value as DeclarationStatementNode;
  const typeSemantic = constNode.annotation
    ? (typeNodeType(semantic, constNode.annotation) as StringTypeSemantic)
    : nothing;

  expect(typeSemantic?.$.toNativeString()).toBe($StringTypeSemantic().toNativeString());
  expect(typeSemantic?.value.toNativeString()).toBe('');
});

test('a is empty string 2', () => {
  const text = newText(`
    const a: ""`);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);
  const constNode = syntax.statements.at(0)?.value as DeclarationStatementNode;
  const typeSemantic = constNode.annotation
    ? (typeNodeType(semantic, constNode.annotation) as StringTypeSemantic)
    : nothing;

  expect(typeSemantic?.$.toNativeString()).toBe($StringTypeSemantic().toNativeString());
  expect(typeSemantic?.value.toNativeString()).toBe('');
});
