import { IntegerLiteralTree } from '../../literal/integer/integer-literal.tree';
import { StringLiteralTree } from '../../literal/string/string-literal.tree';
import { parseExpression } from '../../parse';
import { IdExpressionNode } from '../id/id-expression-node';
import { LiteralExpressionNode } from '../literal/literal-expression-node';
import { MemberExpressionNode } from '../member/member-expression-node';
import { InvokeExpressionNode } from './invoke-expression-node';

test('method call', () => {
  const code = 'f(3, "str")';
  const tree = parseExpression<InvokeExpressionNode>(code);
  expect(tree).toBeInstanceOf(InvokeExpressionNode);

  expect(tree.arguments.length).toBe(2);
  expect((tree.arguments[0] as LiteralExpressionNode).literal).toBeInstanceOf(IntegerLiteralTree);
  expect((tree.arguments[0] as LiteralExpressionNode).literal.value).toBe(3);
  expect((tree.arguments[1] as LiteralExpressionNode).literal).toBeInstanceOf(StringLiteralTree);
  expect((tree.arguments[1] as LiteralExpressionNode).literal.value).toBe('str');
  expect(tree.instance).toBeInstanceOf(IdExpressionNode);
});

test('method on several lines', () => {
  const code = `f(3,
        "str", 123, 
    415)`;
  const tree = parseExpression<InvokeExpressionNode>(code);
  expect(tree).toBeInstanceOf(InvokeExpressionNode);

  expect(tree.arguments.length).toBe(4);
  const [arg1, arg2] = tree.arguments.map((x) => x as LiteralExpressionNode);
  expect(arg1.literal).toBeInstanceOf(IntegerLiteralTree);
  expect(arg2.literal).toBeInstanceOf(StringLiteralTree);
  expect(tree.instance).toBeInstanceOf(IdExpressionNode);
});

test('can call with type parameter', () => {
  const code = 'a.get (1)';
  const tree = parseExpression<InvokeExpressionNode>(code);
  expect(tree).toBeInstanceOf(InvokeExpressionNode);

  expect(tree.arguments.length).toBe(1);
  const [arg] = tree.arguments.map((x) => x as LiteralExpressionNode);
  expect(arg.literal).toBeInstanceOf(IntegerLiteralTree);
  expect(tree.instance).toBeInstanceOf(MemberExpressionNode);
});
