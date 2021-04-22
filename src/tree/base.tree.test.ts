import { LiteralExpressionTree } from './expression/literal-expression/literal-expression.tree';
import { parseExpression } from './parse';

test('check to json', () => {
  const code = 'true';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree).toBeInstanceOf(LiteralExpressionTree);

  expect(tree.toJson()).toBe(`{
  "treeType": "LiteralExpression",
  "literal": {
    "treeType": "BooleanLiteral",
    "value": true
  }
}`);
});
