import { IntegerLiteralNode } from '../../literal/integer/integer-literal-node';
import { StringLiteralNode } from '../../literal/string/string-literal-node';
import { parseExpression } from '../../util/parse';
import { IdExpressionNode } from '../id/id-expression-node';
import { LiteralExpressionNode } from '../literal/literal-expression-node';
import { MemberExpressionNode } from '../member/member-expression-node';
import { InvokeExpressionNode } from './invoke-expression-node';

test('method call', () => {
  const code = 'f(3, "str")';
  const node = parseExpression<InvokeExpressionNode>(code);
  expect(node).toBeInstanceOf(InvokeExpressionNode);

  expect(node.arguments.length).toBe(2);
  expect((node.arguments[0] as LiteralExpressionNode).literal).toBeInstanceOf(IntegerLiteralNode);
  expect((node.arguments[0] as LiteralExpressionNode).literal.value).toBe(3);
  expect((node.arguments[1] as LiteralExpressionNode).literal).toBeInstanceOf(StringLiteralNode);
  expect((node.arguments[1] as LiteralExpressionNode).literal.value).toBe('str');
  expect(node.instance).toBeInstanceOf(IdExpressionNode);
});

test('method on several lines', () => {
  const code = `f(3,
        "str", 123, 
    415)`;
  const node = parseExpression<InvokeExpressionNode>(code);
  expect(node).toBeInstanceOf(InvokeExpressionNode);

  expect(node.arguments.length).toBe(4);
  const [arg1, arg2] = node.arguments.map((x) => x as LiteralExpressionNode);
  expect(arg1.literal).toBeInstanceOf(IntegerLiteralNode);
  expect(arg2.literal).toBeInstanceOf(StringLiteralNode);
  expect(node.instance).toBeInstanceOf(IdExpressionNode);
});

test('can call with type parameter', () => {
  const code = 'a.get (1)';
  const node = parseExpression<InvokeExpressionNode>(code);
  expect(node).toBeInstanceOf(InvokeExpressionNode);

  expect(node.arguments.length).toBe(1);
  const [arg] = node.arguments.map((x) => x as LiteralExpressionNode);
  expect(arg.literal).toBeInstanceOf(IntegerLiteralNode);
  expect(node.instance).toBeInstanceOf(MemberExpressionNode);
});
