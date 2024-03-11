import {parseSyntax} from '../../../parser/syntax';
import {sourceFromText} from '../../../source/source';
import {$Semantic, parseSemantic} from '../../semantic';
import {DeclarationTypeSemantic} from '../../type/declaration/declaration-type-semantic';
import {AttributeSemantic} from '../attribute/attribute-semantic';
import {ModelSemantic} from './model-semantic';

test('only a', () => {
  const text = 'model A\n  p: A';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);
  const model = semantic.declarationManager.declarations.A[0] as ModelSemantic;

  expect(semantic.declarationManager.count()).toBe(1);
  expect(model.$).toBe($Semantic.MODEL);
  expect(model.name).toBe('A');

  expect(Object.keys(model.attributes).length).toBe(1);

  const pAttribute = model.attributes['p'][0] as AttributeSemantic;
  expect(pAttribute.$).toBe($Semantic.ATTRIBUTE);
  expect(pAttribute.name).toBe('p');
  expect(pAttribute.generics).toBeFalsy();
  expect(pAttribute.parameters).toBeFalsy();
  expect((pAttribute.type as DeclarationTypeSemantic).declaration.name).toBe('A');
});

test('declare b then a, a extends b', () => {
  const text = 'model B\nmodel A: B';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(2);

  const aDeclaration = semantic.declarationManager.declarations.A[0] as ModelSemantic;
  expect(aDeclaration.$).toBe($Semantic.MODEL);
  expect(aDeclaration.name).toBe('A');
  expect(aDeclaration.base?.$).toBe('DECLARATION_TYPE');
  expect((aDeclaration.base as DeclarationTypeSemantic)?.declaration.name).toBe('B');

  const bDeclaration = semantic.declarationManager.declarations.B[0] as ModelSemantic;
  expect(bDeclaration.$).toBe($Semantic.MODEL);
  expect(bDeclaration.name).toBe('B');
});

test('declare a then b, a extends b', () => {
  const text = 'model A: B\nmodel B';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(2);

  const aDeclaration = semantic.declarationManager.declarations.A[0] as ModelSemantic;
  expect(aDeclaration.$).toBe($Semantic.MODEL);
  expect(aDeclaration.name).toBe('A');
  expect(aDeclaration.base?.$).toBe('DECLARATION_TYPE');
  expect((aDeclaration.base as DeclarationTypeSemantic)?.declaration.name).toBe('B');

  const bDeclaration = semantic.declarationManager.declarations.B[0] as ModelSemantic;
  expect(bDeclaration.$).toBe($Semantic.MODEL);
  expect(bDeclaration.name).toBe('B');
});
