import { LiteralExpressionNode } from '../../expression/literal/literal-expression-node';
import { parseAttribute } from '../../parse';
import { ExpressionStatementTree } from '../../statement/expression/expression-statement.tree';
import { ArrayTypeTree } from '../../type/array/array-type.tree';
import { IdTypeTree } from '../../type/id/id-type.tree';
import { LambdaTypeTree } from '../../type/lambda/lambda-type.tree';
import { MethodAttributeTree } from './method-attribute-node';

test('no parameters', () => {
  const code = 'a() Integer\n  123';
  const tree = parseAttribute<MethodAttributeTree>(code);
  expect(tree).toBeInstanceOf(MethodAttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type.typeParameters.length).toBe(0);
  expect(tree.type.parameters.length).toBe(0);
  expect((tree.type.resultType as IdTypeTree).id.text).toBe('Integer');

  expect(tree.body.length).toBe(1);
  expect(
    ((tree.body[0] as ExpressionStatementTree).expression as LiteralExpressionNode).literal.value,
  ).toBe(123);
});

test('with parameters', () => {
  const code = '_a(x String) Integer\n  123';
  const tree = parseAttribute<MethodAttributeTree>(code);
  expect(tree).toBeInstanceOf(MethodAttributeTree);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type).toBeInstanceOf(LambdaTypeTree);
  expect(((tree.type as LambdaTypeTree).resultType as IdTypeTree).id.text).toBe('Integer');

  expect(tree.body.length).toBe(1);
  expect(
    ((tree.body[0] as ExpressionStatementTree).expression as LiteralExpressionNode).literal.value,
  ).toBe(123);
});

test('with type parameters', () => {
  const code = 'a<|T|>(x Integer) T[]\n 123';
  const tree = parseAttribute<MethodAttributeTree>(code);
  expect(tree).toBeInstanceOf(MethodAttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type.typeParameters.length).toBe(1);
  expect(tree.type.typeParameters[0].id.text).toBe('T');
  expect(tree.type.parameters.length).toBe(1);
  expect(tree.type.parameters[0].id.text).toBe('x');
  expect((tree.type.parameters[0].type as IdTypeTree).id.text).toBe('Integer');
  expect(((tree.type.resultType as ArrayTypeTree).itemType as IdTypeTree).id.text).toBe('T');

  expect(tree.body.length).toBe(1);
  expect(
    ((tree.body[0] as ExpressionStatementTree).expression as LiteralExpressionNode).literal.value,
  ).toBe(123);
});
