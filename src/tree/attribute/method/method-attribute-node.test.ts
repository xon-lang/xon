import { IdExpressionNode } from '../../expression/id/id-expression-node';
import { IndexExpressionNode } from '../../expression/index/index-expression-node';
import { LiteralExpressionNode } from '../../expression/literal/literal-expression-node';
import { parseAttribute } from '../../parse';
import { ExpressionStatementTree } from '../../statement/expression/expression-statement.tree';
import { MethodAttributeNode } from './method-attribute-node';

test('no parameters', () => {
  const code = 'a() Integer\n  123';
  const tree = parseAttribute<MethodAttributeNode>(code);
  expect(tree).toBeInstanceOf(MethodAttributeNode);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.generics.length).toBe(0);
  expect(tree.parameters.length).toBe(0);
  expect((tree.resultType as IdExpressionNode).id.text).toBe('Integer');

  expect(tree.body.length).toBe(1);
  expect(
    ((tree.body[0] as ExpressionStatementTree).expression as LiteralExpressionNode).literal.value,
  ).toBe(123);
});

test('with parameters', () => {
  const code = '_a(x String) Integer\n  123';
  const tree = parseAttribute<MethodAttributeNode>(code);
  expect(tree).toBeInstanceOf(MethodAttributeNode);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect((tree.resultType as IdExpressionNode).id.text).toBe('Integer');

  expect(tree.body.length).toBe(1);
  expect(
    ((tree.body[0] as ExpressionStatementTree).expression as LiteralExpressionNode).literal.value,
  ).toBe(123);
});

test('with type parameters', () => {
  const code = 'a<|T|>(x Integer) T[]\n 123';
  const tree = parseAttribute<MethodAttributeNode>(code);
  expect(tree).toBeInstanceOf(MethodAttributeNode);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.generics.length).toBe(1);
  expect((tree.generics[0] as IdExpressionNode).id.text).toBe('T');
  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].id.text).toBe('x');
  expect((tree.parameters[0].type as IdExpressionNode).id.text).toBe('Integer');
  expect(((tree.resultType as IndexExpressionNode).instance as IdExpressionNode).id.text).toBe('T');

  expect(tree.body.length).toBe(1);
  expect(
    ((tree.body[0] as ExpressionStatementTree).expression as LiteralExpressionNode).literal.value,
  ).toBe(123);
});
