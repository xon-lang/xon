import {parseSyntax} from '../../parser/syntax';
import {sourceFromText} from '../../source/source';
import {$Semantic, parseSemantic} from '../semantic';
import {IdTypeSemantic} from '../type/id/id-type-semantic';

test('only a', () => {
  const text = 'model A\n  p: A';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);
  const model = semantic.declarationManager.declarations.A[0];

  expect(semantic.declarationManager.count()).toBe(1);
  expect(model.$).toBe($Semantic.DECLARATION);
  expect(model.modifier).toBe('model');
  expect(model.name).toBe('A');

  expect(Object.keys(model.attributes).length).toBe(1);

  const pAttribute = model.attributes['p'][0];
  expect(pAttribute.$).toBe($Semantic.DECLARATION);
  expect(pAttribute.name).toBe('p');
  expect(pAttribute.generics).toBeFalsy();
  expect(pAttribute.parameters).toBeFalsy();
  expect((pAttribute.type as IdTypeSemantic).declaration?.name).toBe('A');
});

test('declare b then a, a extends b', () => {
  const text = 'model B\nmodel A: B';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(2);

  const aDeclaration = semantic.declarationManager.declarations.A[0];
  expect(aDeclaration.$).toBe($Semantic.DECLARATION);
  expect(aDeclaration.modifier).toBe('model');
  expect(aDeclaration.name).toBe('A');
  expect(aDeclaration.type?.$).toBe($Semantic.ID_TYPE);
  expect((aDeclaration.type as IdTypeSemantic)?.declaration?.name).toBe('B');

  const bDeclaration = semantic.declarationManager.declarations.B[0];
  expect(bDeclaration.$).toBe($Semantic.DECLARATION);
  expect(bDeclaration.modifier).toBe('model');
  expect(bDeclaration.name).toBe('B');
});

test('declare a then b, a extends b', () => {
  const text = 'model A: B\nmodel B';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(2);

  const aDeclaration = semantic.declarationManager.declarations.A[0];
  expect(aDeclaration.$).toBe($Semantic.DECLARATION);
  expect(aDeclaration.modifier).toBe('model');
  expect(aDeclaration.name).toBe('A');
  expect(aDeclaration.type?.$).toBe($Semantic.ID_TYPE);
  expect((aDeclaration.type as IdTypeSemantic)?.declaration?.name).toBe('B');

  const bDeclaration = semantic.declarationManager.declarations.B[0];
  expect(bDeclaration.$).toBe($Semantic.DECLARATION);
  expect(bDeclaration.modifier).toBe('model');
  expect(bDeclaration.name).toBe('B');
});
