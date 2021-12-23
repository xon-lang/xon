import { LiteralExpressionNode } from './expression/literal/literal-expression-node';
import { parseExpression } from './parse';

test('check to json', () => {
  const code = '123';
  const node = parseExpression<LiteralExpressionNode>(code);
  expect(node).toBeInstanceOf(LiteralExpressionNode);

  expect(node.toJson()).toBe(`{
  "nodeType": "LiteralExpression",
  "literal": {
    "nodeType": "IntegerLiteral",
    "integer": "123",
    "radix": null,
    "value": 123
  }
}`);
});
