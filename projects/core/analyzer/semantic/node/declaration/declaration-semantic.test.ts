import {$} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';
import {createSemanticAnalyzer} from '../../semantic-analyzer';
import {IdTypeSemantic} from '../type/id/id-type-semantic';
import {DeclarationSemantic} from './declaration-semantic';

test('only a', () => {
  const text = 'model A\n  p: A';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);
  const model = semantic.declarationManager.declarations['A'][0] as DeclarationSemantic;

  expect(semantic.declarationManager.count()).toBe(1);
  expect(model.$).toBe($.DeclarationSemantic);
  expect(model.modifier).toBe('model');
  expect(model.name).toBe('A');

  expect(Object.keys(model.attributes ?? {}).length).toBe(1);

  const attributeP = model.attributes?.['p'][0] as DeclarationSemantic;
  expect(attributeP.$).toBe($.DeclarationSemantic);
  expect(attributeP.name).toBe('p');
  expect(attributeP.generics).toBeFalsy();
  expect(attributeP.parameters).toBeFalsy();
  expect((attributeP.type as IdTypeSemantic).declaration?.name).toBe('A');
});

test('declare b then a, a extends b', () => {
  const text = 'model B\nmodel A: B';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(2);

  const modelA = semantic.declarationManager.declarations['A'][0] as DeclarationSemantic;
  expect(modelA.$).toBe($.DeclarationSemantic);
  expect(modelA.modifier).toBe('model');
  expect(modelA.name).toBe('A');
  expect(modelA.type?.$).toBe($.IdType);
  expect((modelA.type as IdTypeSemantic)?.declaration?.name).toBe('B');

  const modelB = semantic.declarationManager.declarations['B'][0] as DeclarationSemantic;
  expect(modelB.$).toBe($.DeclarationSemantic);
  expect(modelB.modifier).toBe('model');
  expect(modelB.name).toBe('B');
});

test('declare a then b, a extends b', () => {
  const text = 'model A: B\nmodel B';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(2);

  const modelA = semantic.declarationManager.declarations['A'][0] as DeclarationSemantic;
  expect(modelA.$).toBe($.DeclarationSemantic);
  expect(modelA.modifier).toBe('model');
  expect(modelA.name).toBe('A');
  expect(modelA.type?.$).toBe($.IdType);
  expect((modelA.type as IdTypeSemantic)?.declaration?.name).toBe('B');

  const modelB = semantic.declarationManager.declarations['B'][0] as DeclarationSemantic;
  expect(modelB.$).toBe($.DeclarationSemantic);
  expect(modelB.modifier).toBe('model');
  expect(modelB.name).toBe('B');
});
