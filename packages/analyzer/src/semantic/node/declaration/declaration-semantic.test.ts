import {
  $AttributeValueDeclarationSemantic,
  $IdTypeSemantic,
  $NominalTypeDeclarationSemantic,
  $ValueDeclarationSemantic,
  AttributeValueDeclarationSemantic,
  createSemanticAnalyzer,
  IdTypeSemantic,
  NominalTypeDeclarationSemantic,
  syntaxFromResource,
  TEST_SEMANTIC_CONFIG,
} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('only a', () => {
  const text = newText('type A\n  p: A');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semanticAnalyzer = createSemanticAnalyzer(syntax);
  const type = semanticAnalyzer.declarationManager.declarations
    .get(newText('A'))
    ?.at2(0) as NominalTypeDeclarationSemantic;

  expect(semanticAnalyzer.declarationManager.count()).toBe(1);
  expect(type.$).toBe($NominalTypeDeclarationSemantic);
  expect(type.modifier?.toNativeString()).toBe('type');
  expect(type.name.toNativeString()).toBe('A');

  expect(type.attributes?.declarations.count()).toBe(1);

  const attributeP = type.attributes?.find(
    $ValueDeclarationSemantic,
    newText('p'),
  ) as AttributeValueDeclarationSemantic;
  expect(attributeP.$).toBe($AttributeValueDeclarationSemantic);
  expect(attributeP.name.toNativeString()).toBe('p');
  expect((attributeP.type as IdTypeSemantic).declaration?.name.toNativeString()).toBe('A');
});

test('declare b then a, a extends b', () => {
  const text = newText('type B\ntype A: B');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(2);

  const typeA = semantic.declarationManager.declarations
    .get(newText('A'))
    ?.at2(0) as NominalTypeDeclarationSemantic;
  expect(typeA.$).toBe($NominalTypeDeclarationSemantic);
  expect(typeA.modifier?.toNativeString()).toBe('type');
  expect(typeA.name.toNativeString()).toBe('A');
  expect(typeA.baseType?.$).toBe($IdTypeSemantic);
  expect((typeA.baseType as IdTypeSemantic)?.declaration?.name.toNativeString()).toBe('B');

  const typeB = semantic.declarationManager.declarations
    .get(newText('B'))
    ?.at2(0) as NominalTypeDeclarationSemantic;
  expect(typeB.$).toBe($NominalTypeDeclarationSemantic);
  expect(typeB.modifier?.toNativeString()).toBe('type');
  expect(typeB.name.toNativeString()).toBe('B');
});

test('declare a then b, a extends b', () => {
  const text = newText('type A: B\ntype B');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(2);

  const typeA = semantic.declarationManager.declarations
    .get(newText('A'))
    ?.at2(0) as NominalTypeDeclarationSemantic;
  expect(typeA.$).toBe($NominalTypeDeclarationSemantic);
  expect(typeA.modifier?.toNativeString()).toBe('type');
  expect(typeA.name.toNativeString()).toBe('A');
  expect(typeA.baseType?.$).toBe($IdTypeSemantic);
  expect((typeA.baseType as IdTypeSemantic)?.declaration?.name.toNativeString()).toBe('B');

  const typeB = semantic.declarationManager.declarations
    .get(newText('B'))
    ?.at2(0) as NominalTypeDeclarationSemantic;
  expect(typeB.$).toBe($NominalTypeDeclarationSemantic);
  expect(typeB.modifier?.toNativeString()).toBe('type');
  expect(typeB.name.toNativeString()).toBe('B');
});

test('infix plus operator', () => {
  const text = newText('infix + (a: Integer, b: Integer): Integer');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);

  // const typeA = semantic.declarationManager.declarations.get(newTextData('A'))?.at2(0) as NominalTypeDeclarationSemantic;
  // expect(typeA.$).toBe($NominalTypeDeclarationSemantic);
  // expect(typeA.modifier).toBe('type');
  // expect(typeA.name).toBe('A');
  // expect(typeA.type?.$).toBe($IdTypeSemantic);
  // expect((typeA.type as IdTypeSemantic)?.declaration?.name).toBe('B');
});
