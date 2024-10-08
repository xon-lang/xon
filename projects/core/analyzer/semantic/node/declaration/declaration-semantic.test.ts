import {$} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';
import {createSemanticAnalyzer} from '../../semantic-analyzer';
import {TEST_SEMANTIC_CONFIG} from '../../semantic-analyzer-config';
import {IdTypeSemantic} from '../type/id/id-type-semantic';
import {NominalTypeDeclarationSemantic} from './type/nominal/nominal-type-declaration-semantic';
import {AttributeValueDeclarationSemantic} from './value/attribute/attribute-value-declaration-semantic';

test('only a', () => {
  const text = 'type A\n  p: A';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);
  const type = semantic.declarationManager.declarations['A'][0] as NominalTypeDeclarationSemantic;

  expect(semantic.declarationManager.count()).toBe(1);
  expect(type.$).toBe($.NominalTypeDeclarationSemantic);
  expect(type.modifier).toBe('type');
  expect(type.name).toBe('A');

  expect(Object.keys(type.attributes?.declarations ?? {}).length).toBe(1);

  const attributeP = type.attributes?.single(
    $.ValueDeclarationSemantic,
    'p',
  ) as AttributeValueDeclarationSemantic;
  expect(attributeP.$).toBe($.AttributeValueDeclarationSemantic);
  expect(attributeP.name).toBe('p');
  expect((attributeP.type as IdTypeSemantic).declaration?.name).toBe('A');
});

test('declare b then a, a extends b', () => {
  const text = 'type B\ntype A: B';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(2);

  const typeA = semantic.declarationManager.declarations['A'][0] as NominalTypeDeclarationSemantic;
  expect(typeA.$).toBe($.NominalTypeDeclarationSemantic);
  expect(typeA.modifier).toBe('type');
  expect(typeA.name).toBe('A');
  expect(typeA.baseType?.$).toBe($.IdTypeSemantic);
  expect((typeA.baseType as IdTypeSemantic)?.declaration?.name).toBe('B');

  const typeB = semantic.declarationManager.declarations['B'][0] as NominalTypeDeclarationSemantic;
  expect(typeB.$).toBe($.NominalTypeDeclarationSemantic);
  expect(typeB.modifier).toBe('type');
  expect(typeB.name).toBe('B');
});

test('declare a then b, a extends b', () => {
  const text = 'type A: B\ntype B';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(2);

  const typeA = semantic.declarationManager.declarations['A'][0] as NominalTypeDeclarationSemantic;
  expect(typeA.$).toBe($.NominalTypeDeclarationSemantic);
  expect(typeA.modifier).toBe('type');
  expect(typeA.name).toBe('A');
  expect(typeA.baseType?.$).toBe($.IdTypeSemantic);
  expect((typeA.baseType as IdTypeSemantic)?.declaration?.name).toBe('B');

  const typeB = semantic.declarationManager.declarations['B'][0] as NominalTypeDeclarationSemantic;
  expect(typeB.$).toBe($.NominalTypeDeclarationSemantic);
  expect(typeB.modifier).toBe('type');
  expect(typeB.name).toBe('B');
});

test('infix plus operator', () => {
  const text = 'infix + (a: Integer, b: Integer): Integer';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);

  // const typeA = semantic.declarationManager.declarations['A'][0] as NominalTypeDeclarationSemantic;
  // expect(typeA.$).toBe($.NominalTypeDeclarationSemantic);
  // expect(typeA.modifier).toBe('type');
  // expect(typeA.name).toBe('A');
  // expect(typeA.type?.$).toBe($.IdTypeSemantic);
  // expect((typeA.type as IdTypeSemantic)?.declaration?.name).toBe('B');
});
