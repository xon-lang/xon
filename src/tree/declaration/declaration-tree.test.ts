import { BodyTree } from '~/tree/body/body-tree';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { IntegerExpressionTree } from '~/tree/expression/integer/integer-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { DeclarationStatementTree } from '~/tree/statement/declaration/declaration-statement-tree';
import { parseDeclaration } from '~/util/parse';

test('prop in prop', () => {
  const code = 'a\n  b = 1';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.modifier).toBe(null);
  expect(tree.name.text).toBe('a');
  expect(tree.type).toBe(null);
  expect(tree.value).toBeInstanceOf(BodyTree);
  expect((tree.value as BodyTree).statements.length).toBe(1);
  const bodyStatement = (tree.value as BodyTree).statements[0] as DeclarationStatementTree;
  expect(bodyStatement).toBeInstanceOf(DeclarationStatementTree);
  expect(bodyStatement.declaration.modifier).toBe(null);
  expect(bodyStatement.declaration.name.text).toBe('b');
  expect(bodyStatement.declaration.value).toBeInstanceOf(IntegerExpressionTree);
});

test('name and type', () => {
  const code = 'abc: ABC';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.modifier).toBe(null);
  expect(tree.name.text).toBe('abc');
  expect((tree.type as IdExpressionTree).name.text).toBe('ABC');
});

test('model animal', () => {
  const code = 'model Animal';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.name.text).toBe('Animal');
  expect(tree.type).toBe(null);
});

test('object with parameters', () => {
  const code = 'object Cat {T}: Animal';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.modifier?.text).toBe('object');
  expect(tree.name.text).toBe('Cat');
  expect((tree.type as IdExpressionTree).name.text).toBe('Animal');
  expect(tree.generics?.length).toBe(1);
  expect(tree.generics?.at(0)?.name.text).toBe('T');
});

test('model cat', () => {
  const code = 'model Cat: Animal';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.name.text).toBe('Cat');
  expect((tree.type as IdExpressionTree).name.text).toBe('Animal');
});

test('model animal with only attribute', () => {
  const code = 'model Animal\n   --def: Integer\n   abc: Integer';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.allIssues().length).toBe(0);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.name.text).toBe('Animal');
  expect(tree.type).toBe(null);
});

test('model cat with generics', () => {
  const code = 'model Cat{T: Number}: Animal{T, Integer}';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.name.text).toBe('Cat');
  expect(tree.generics?.length).toBe(1);
  expect(tree.generics?.at(0)?.name.text).toBe('T');
  expect((tree.generics?.at(0)?.type as IdExpressionTree).name.text).toBe('Number');
  const type = tree.type as InvokeExpressionTree;
  expect(type).toBeInstanceOf(InvokeExpressionTree);
  expect((type.instance as IdExpressionTree).name.text).toBe('Animal');
  expect(type.arguments?.length).toBe(2);
  expect((type.arguments?.at(0)?.value as IdExpressionTree).name.text).toBe('T');
  expect((type.arguments?.at(1)?.value as IdExpressionTree).name.text).toBe('Integer');
});
