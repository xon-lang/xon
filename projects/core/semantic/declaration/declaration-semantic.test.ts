import {parseSyntax} from '../../parser/syntax';
import {sourceFromText} from '../../source/source';
import {$Semantic, parseSemantic} from '../semantic';
import {DeclarationTypeSemantic} from '../type/declaration/declaration-type-semantic';
import {TypeDeclarationSemantic} from './type/type-declaration-semantic';
import {ValueDeclarationSemantic} from './value/value-declaration-semantic';

test('only a', () => {
  const text = 'model A\n  p: A';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);
  const model = semantic.declarationManager.declarations.A[0] as TypeDeclarationSemantic;

  expect(semantic.declarationManager.count()).toBe(1);
  expect(model.$).toBe($Semantic.TYPE_DECLARATION);
  expect(model.modifier).toBe('model');
  expect(model.name).toBe('A');

  expect(Object.keys(model.attributes).length).toBe(1);

  const pAttribute = model.attributes['p'][0] as ValueDeclarationSemantic;
  expect(pAttribute.$).toBe($Semantic.VALUE_DECLARATION);
  expect(pAttribute.name).toBe('p');
  expect(pAttribute.generics).toBeFalsy();
  expect(pAttribute.parameters).toBeFalsy();
  expect((pAttribute.type as DeclarationTypeSemantic).declaration?.name).toBe('A');
});

test('declare b then a, a extends b', () => {
  const text = 'model B\nmodel A: B';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(2);

  const aDeclaration = semantic.declarationManager.declarations.A[0] as TypeDeclarationSemantic;
  expect(aDeclaration.$).toBe($Semantic.TYPE_DECLARATION);
  expect(aDeclaration.modifier).toBe('model');
  expect(aDeclaration.name).toBe('A');
  expect(aDeclaration.baseType?.$).toBe($Semantic.DECLARATION_TYPE);
  expect((aDeclaration.baseType as DeclarationTypeSemantic)?.declaration?.name).toBe('B');

  const bDeclaration = semantic.declarationManager.declarations.B[0] as TypeDeclarationSemantic;
  expect(bDeclaration.$).toBe($Semantic.VALUE_DECLARATION);
  expect(bDeclaration.modifier).toBe('model');
  expect(bDeclaration.name).toBe('B');
});

test('declare a then b, a extends b', () => {
  const text = 'model A: B\nmodel B';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(2);

  const modelA = semantic.declarationManager.declarations.A[0] as TypeDeclarationSemantic;
  expect(modelA.$).toBe($Semantic.TYPE_DECLARATION);
  expect(modelA.modifier).toBe('model');
  expect(modelA.name).toBe('A');
  expect(modelA.baseType?.$).toBe($Semantic.DECLARATION_TYPE);
  expect((modelA.baseType as DeclarationTypeSemantic)?.declaration?.name).toBe('B');

  const modelB = semantic.declarationManager.declarations.B[0] as TypeDeclarationSemantic;
  expect(modelB.$).toBe($Semantic.TYPE_DECLARATION);
  expect(modelB.modifier).toBe('model');
  expect(modelB.name).toBe('B');
});
