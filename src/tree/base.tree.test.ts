import { LiteralExpressionTree } from './expression/literal-expression/literal-expression.tree';
import { parseExpression } from './parse';

test('check to json', () => {
  const code = '123';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree).toBeInstanceOf(LiteralExpressionTree);

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
