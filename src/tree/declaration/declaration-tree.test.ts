import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { parseDeclaration } from '~/util/parse';

test('model animal', () => {
  const code = 'model Animal';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.name?.text).toBe('Animal');
  expect(tree.type).toBe(null);
});

test('object with parameters', () => {
  const code = 'object Cat {T}: Animal';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.modifier?.text).toBe('object');
  expect(tree.name?.text).toBe('Cat');
  expect((tree.type as IdExpressionTree).name.text).toBe('Animal');
  expect(tree.generics?.length).toBe(1);
  expect(tree.generics?.at(0)?.name?.text).toBe('T');
});

test('model cat', () => {
  const code = 'model Cat: Animal';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.name?.text).toBe('Cat');
  expect((tree.type as IdExpressionTree).name.text).toBe('Animal');
});

test('model animal with only attribute', () => {
  const code = 'model Animal\n   --def: Integer\n   abc: Integer';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.allIssues().length).toBe(0);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.name?.text).toBe('Animal');
  expect(tree.type).toBe(null);
});

test('model cat with generics', () => {
  const code = 'model Cat{T: Number}: Animal{T, Integer}';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.name?.text).toBe('Cat');
  expect(tree.generics?.length).toBe(1);
  expect(tree.generics?.at(0)?.name?.text).toBe('T');
  expect((tree.generics?.at(0)?.type as IdExpressionTree).name.text).toBe('Number');
  const type = tree.type as InvokeExpressionTree;
  expect(type).toBeInstanceOf(InvokeExpressionTree);
  expect((type.instance as IdExpressionTree).name.text).toBe('Animal');
  expect(type.generics?.length).toBe(2);
  expect((type.generics?.at(0)?.value as IdExpressionTree).name.text).toBe('T');
  expect((type.generics?.at(1)?.value as IdExpressionTree).name.text).toBe('Integer');
});
