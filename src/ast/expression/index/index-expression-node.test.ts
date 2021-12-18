import { IntegerLiteralNode } from '../../literal/integer/integer-literal-node';
import { StringLiteralNode } from '../../literal/string/string-literal-node';
import { parseExpression } from '../../parse';
import { IdExpressionNode } from '../id/id-expression-node';
import { LiteralExpressionNode } from '../literal/literal-expression-node';
import { MemberExpressionNode } from '../member/member-expression-node';
import { IndexExpressionNode } from './index-expression-node';

test('method call', () => {
  const code = 'f[3, "str"]';
  const tree = parseExpression<IndexExpressionNode>(code);
  expect(tree).toBeInstanceOf(IndexExpressionNode);

  expect(tree.arguments.length).toBe(2);
  expect((tree.arguments[0] as LiteralExpressionNode).literal).toBeInstanceOf(IntegerLiteralNode);
  expect((tree.arguments[0] as LiteralExpressionNode).literal.value).toBe(3);
  expect((tree.arguments[1] as LiteralExpressionNode).literal).toBeInstanceOf(StringLiteralNode);
  expect((tree.arguments[1] as LiteralExpressionNode).literal.value).toBe('str');
  expect(tree.instance).toBeInstanceOf(IdExpressionNode);
});

test('method on several lines', () => {
  const code = `f[3,
        "str", 123, 
    415]`;
  const tree = parseExpression<IndexExpressionNode>(code);
  expect(tree).toBeInstanceOf(IndexExpressionNode);

  expect(tree.arguments.length).toBe(4);
  const [arg1, arg2] = tree.arguments.map((x) => x as LiteralExpressionNode);
  expect(arg1.literal).toBeInstanceOf(IntegerLiteralNode);
  expect(arg2.literal).toBeInstanceOf(StringLiteralNode);
  expect(tree.instance).toBeInstanceOf(IdExpressionNode);
});

test('can call with type parameter', () => {
  const code = 'a.get [1]';
  const tree = parseExpression<IndexExpressionNode>(code);
  expect(tree).toBeInstanceOf(IndexExpressionNode);

  expect(tree.arguments.length).toBe(1);
  const [arg] = tree.arguments.map((x) => x as LiteralExpressionNode);
  expect(arg.literal).toBeInstanceOf(IntegerLiteralNode);
  expect(tree.instance).toBeInstanceOf(MemberExpressionNode);
});

test('can call with type parameter', () => {
  const code = 'A[]';
  const tree = parseExpression<IndexExpressionNode>(code);
  expect(tree).toBeInstanceOf(IndexExpressionNode);

  expect(tree.arguments.length).toBe(0);
  expect(tree.instance).toBeInstanceOf(IdExpressionNode);
});
