import { LiteralExpressionNode } from './expression/literal/literal-expression-node';
import { parseExpression } from './parse';

test('check to json', () => {
  const code = '123';
  const tree = parseExpression<LiteralExpressionNode>(code);
  expect(tree).toBeInstanceOf(LiteralExpressionNode);

  expect(tree.toJson()).toBe(`{
  "treeType": "LiteralExpression",
  "literal": {
    "treeType": "IntegerLiteral",
    "integer": "123",
    "radix": null,
    "value": 123
  }
}`);
});
