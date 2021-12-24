import { IntegerLiteralNode } from '../../literal/integer/integer-literal-node';
import { StringLiteralNode } from '../../literal/string/string-literal-node';
import { parseExpression } from '../../util/parse';
import { IdExpressionNode } from '../id/id-expression-node';
import { LiteralExpressionNode } from '../literal/literal-expression-node';
import { IndexExpressionNode } from './index-expression-node';

test('method call', () => {
  const code = 'f[3, "str"]';
  const node = parseExpression<IndexExpressionNode>(code);
  expect(node).toBeInstanceOf(IndexExpressionNode);

  expect(node.arguments.length).toBe(2);
  expect((node.arguments[0] as LiteralExpressionNode).literal).toBeInstanceOf(IntegerLiteralNode);
  expect((node.arguments[0] as LiteralExpressionNode).literal.value).toBe(3);
  expect((node.arguments[1] as LiteralExpressionNode).literal).toBeInstanceOf(StringLiteralNode);
  expect((node.arguments[1] as LiteralExpressionNode).literal.value).toBe('str');
  expect(node.instance).toBeInstanceOf(IdExpressionNode);
});

test('method on several lines', () => {
  const code = `f[3,
        "str", 123, 
    415]`;
  const node = parseExpression<IndexExpressionNode>(code);
  expect(node).toBeInstanceOf(IndexExpressionNode);

  expect(node.arguments.length).toBe(4);
  const [arg1, arg2] = node.arguments.map((x) => x as LiteralExpressionNode);
  expect(arg1.literal).toBeInstanceOf(IntegerLiteralNode);
  expect(arg2.literal).toBeInstanceOf(StringLiteralNode);
  expect(node.instance).toBeInstanceOf(IdExpressionNode);
});

test('no args', () => {
  const code = 'A[]';
  const node = parseExpression<IndexExpressionNode>(code);
  expect(node).toBeInstanceOf(IndexExpressionNode);

  expect(node.arguments.length).toBe(0);
  expect(node.instance).toBeInstanceOf(IdExpressionNode);
});
