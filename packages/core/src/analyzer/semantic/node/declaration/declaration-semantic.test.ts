import {newTextData, nothing, textResourceFromData} from '#common';
import {
  AttributeValueDeclarationSemantic,
  createSemanticAnalyzer,
  IdTypeSemantic,
  NominalTypeDeclarationSemantic,
  syntaxFromResource,
  TEST_SEMANTIC_CONFIG,
} from '#core';
import {$} from '#typing';

test('only a', () => {
  const text = newTextData('type A\n  p: A');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semanticAnalyzer = createSemanticAnalyzer(syntax);
  const type = semanticAnalyzer.declarationManager.declarations
    .get(newTextData('A'))
    ?.at2(0) as NominalTypeDeclarationSemantic;

  expect(semanticAnalyzer.declarationManager.count()).toBe(1);
  expect(type.$).toBe($.NominalTypeDeclarationSemantic);
  expect(type.modifier).toBe('type');
  expect(type.name).toBe('A');

  expect(Object.keys(type.attributes?.declarations ?? {}).length).toBe(1);

  const attributeP = type.attributes?.find(
    $.ValueDeclarationSemantic,
    newTextData('p'),
  ) as AttributeValueDeclarationSemantic;
  expect(attributeP.$).toBe($.AttributeValueDeclarationSemantic);
  expect(attributeP.name).toBe('p');
  expect((attributeP.type as IdTypeSemantic).declaration?.name).toBe('A');
});

test('declare b then a, a extends b', () => {
  const text = newTextData('type B\ntype A: B');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(2);

  const typeA = semantic.declarationManager.declarations
    .get(newTextData('A'))
    ?.at2(0) as NominalTypeDeclarationSemantic;
  expect(typeA.$).toBe($.NominalTypeDeclarationSemantic);
  expect(typeA.modifier).toBe('type');
  expect(typeA.name).toBe('A');
  expect(typeA.baseType?.$).toBe($.IdTypeSemantic);
  expect((typeA.baseType as IdTypeSemantic)?.declaration?.name).toBe('B');

  const typeB = semantic.declarationManager.declarations
    .get(newTextData('B'))
    ?.at2(0) as NominalTypeDeclarationSemantic;
  expect(typeB.$).toBe($.NominalTypeDeclarationSemantic);
  expect(typeB.modifier).toBe('type');
  expect(typeB.name).toBe('B');
});

test('declare a then b, a extends b', () => {
  const text = newTextData('type A: B\ntype B');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(2);

  const typeA = semantic.declarationManager.declarations
    .get(newTextData('A'))
    ?.at2(0) as NominalTypeDeclarationSemantic;
  expect(typeA.$).toBe($.NominalTypeDeclarationSemantic);
  expect(typeA.modifier).toBe('type');
  expect(typeA.name).toBe('A');
  expect(typeA.baseType?.$).toBe($.IdTypeSemantic);
  expect((typeA.baseType as IdTypeSemantic)?.declaration?.name).toBe('B');

  const typeB = semantic.declarationManager.declarations
    .get(newTextData('B'))
    ?.at2(0) as NominalTypeDeclarationSemantic;
  expect(typeB.$).toBe($.NominalTypeDeclarationSemantic);
  expect(typeB.modifier).toBe('type');
  expect(typeB.name).toBe('B');
});

test('infix plus operator', () => {
  const text = newTextData('infix + (a: Integer, b: Integer): Integer');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);

  // const typeA = semantic.declarationManager.declarations.get(newTextData('A'))?.at2(0) as NominalTypeDeclarationSemantic;
  // expect(typeA.$).toBe($.NominalTypeDeclarationSemantic);
  // expect(typeA.modifier).toBe('type');
  // expect(typeA.name).toBe('A');
  // expect(typeA.type?.$).toBe($.IdTypeSemantic);
  // expect((typeA.type as IdTypeSemantic)?.declaration?.name).toBe('B');
});
