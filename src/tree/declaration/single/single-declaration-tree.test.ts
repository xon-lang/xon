import { SingleDeclarationTree } from '~/tree/declaration/single/single-declaration-tree';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { parseDeclaration } from '~/util/parse';

test('model animal', () => {
  const code = 'model Animal';
  const tree = parseDeclaration(code) as SingleDeclarationTree;

  expect(tree).toBeInstanceOf(SingleDeclarationTree);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.name?.text).toBe('Animal');
  expect(tree.base).toBe(null);
  // expect(tree.attributes.length).toBe(0);
});

test('object with parameters', () => {
  const code = 'object Cat {T}: Animal';
  const tree = parseDeclaration(code) as SingleDeclarationTree;

  expect(tree).toBeInstanceOf(SingleDeclarationTree);
  expect(tree.modifier?.text).toBe('object');
  expect(tree.name?.text).toBe('Cat');
  expect((tree.base as IdExpressionTree).name.text).toBe('Animal');
  expect(tree.generics?.length).toBe(1);
  expect(tree.generics?.at(0)?.name?.text).toBe('T');
  // expect(tree.attributes.length).toBe(0);
});

test('model cat', () => {
  const code = 'model Cat: Animal';
  const tree = parseDeclaration(code) as SingleDeclarationTree;

  expect(tree).toBeInstanceOf(SingleDeclarationTree);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.name?.text).toBe('Cat');
  expect((tree.base as IdExpressionTree).name.text).toBe('Animal');
  // expect(tree.attributes.length).toBe(0);
});

test('model animal with only attribute', () => {
  const code = 'model Animal\n   --def: Integer\n   abc: Integer';
  const tree = parseDeclaration(code) as SingleDeclarationTree;

  expect(tree).toBeInstanceOf(SingleDeclarationTree);
  expect(tree.allIssues().length).toBe(0);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.name?.text).toBe('Animal');
  expect(tree.base).toBe(null);
  // expect(tree.attributes.length).toBe(1);

  // const attributes = tree.attributes.filter(isParameterDeclaration);
  // expect(attributes[0].name?.text).toBe('abc');
});

test('model cat with generics', () => {
  const code = 'model Cat{T: Number}: Animal{T, Integer}';
  const tree = parseDeclaration(code) as SingleDeclarationTree;

  expect(tree).toBeInstanceOf(SingleDeclarationTree);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.name?.text).toBe('Cat');
  expect(tree.generics?.length).toBe(1);
  expect(tree.generics?.at(0)?.name?.text).toBe('T');
  expect((tree.generics?.at(0)?.type as IdExpressionTree).name.text).toBe('Number');
  const base = tree.base as InvokeExpressionTree;
  expect(base).toBeInstanceOf(InvokeExpressionTree);
  expect((base.instance as IdExpressionTree).name.text).toBe('Animal');
  expect(base.arguments.length).toBe(2);
  expect((base.arguments[0].value as IdExpressionTree).name.text).toBe('T');
  expect((base.arguments[1].value as IdExpressionTree).name.text).toBe('Integer');
  // expect(tree.attributes.length).toBe(0);
});
