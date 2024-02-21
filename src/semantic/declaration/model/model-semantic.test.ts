import { parseSyntax } from '../../../syntax/syntax';
import { $Semantic, parseSemantic } from '../../semantic';
import { ModelSemantic } from './model-semantic';

test('only a', () => {
  const text = 'model A';
  const syntax = parseSyntax(text);
  const semantic = parseSemantic(syntax);

  expect(Object.keys(semantic.declarations).length).toBe(1);
  expect(semantic.declarations.A[0].$).toBe($Semantic.MODEL);
  expect(semantic.declarations.A[0].name).toBe('A');
});

test('declare b then a, a extends b', () => {
  const text = 'model B\nmodel A: B';
  const syntax = parseSyntax(text);
  const semantic = parseSemantic(syntax);

  expect(Object.keys(semantic.declarations).length).toBe(2);

  const aDeclaration = semantic.declarations.A[0] as ModelSemantic;
  expect(aDeclaration.$).toBe($Semantic.MODEL);
  expect(aDeclaration.name).toBe('A');
  expect(aDeclaration.base?.declaration.name).toBe('B');

  const bDeclaration = semantic.declarations.B[0] as ModelSemantic;
  expect(bDeclaration.$).toBe($Semantic.MODEL);
  expect(bDeclaration.name).toBe('B');
});

test('declare a then b, a extends b', () => {
  const text = 'model A: B\nmodel B';
  const syntax = parseSyntax(text);
  const semantic = parseSemantic(syntax);

  expect(Object.keys(semantic.declarations).length).toBe(2);

  const aDeclaration = semantic.declarations.A[0] as ModelSemantic;
  expect(aDeclaration.$).toBe($Semantic.MODEL);
  expect(aDeclaration.name).toBe('A');
  expect(aDeclaration.base?.declaration.name).toBe('B');

  const bDeclaration = semantic.declarations.B[0] as ModelSemantic;
  expect(bDeclaration.$).toBe($Semantic.MODEL);
  expect(bDeclaration.name).toBe('B');
});
