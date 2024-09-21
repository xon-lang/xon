import {nothing, textResourceFromData} from '#common';
import {
  AttributeValueDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  StringTypeSemantic,
  syntaxFromResource,
  TEST_SEMANTIC_CONFIG,
  typeNodeType,
} from '#core';
import {$} from '#typing';

test('a is string value', () => {
  const text = `
    const a: "abc" = "abc"
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($.AttributeValueDeclarationSemantic);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[0].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.AttributeValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as StringTypeSemantic)
    : nothing;
  expect(typeSemantic?.$).toBe($.StringTypeSemantic);
  expect(typeSemantic?.value).toBe('abc');
});

test('a is string literal', () => {
  const text = `
    const a: "abc`;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);
  const constNode = syntax.statements[0].value as DeclarationNode;
  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as StringTypeSemantic)
    : nothing;

  expect(typeSemantic?.$).toBe($.StringTypeSemantic);
  expect(typeSemantic?.value).toBe('abc');
});

test('a is empty string 1', () => {
  const text = `
    const a: "`;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);
  const constNode = syntax.statements[0].value as DeclarationNode;
  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as StringTypeSemantic)
    : nothing;

  expect(typeSemantic?.$).toBe($.StringTypeSemantic);
  expect(typeSemantic?.value).toBe('');
});

test('a is empty string 2', () => {
  const text = `
    const a: ""`;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);
  const constNode = syntax.statements[0].value as DeclarationNode;
  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as StringTypeSemantic)
    : nothing;

  expect(typeSemantic?.$).toBe($.StringTypeSemantic);
  expect(typeSemantic?.value).toBe('');
});
