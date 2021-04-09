import { parseExpression } from '../parse';
import { LiteralExpressionTree } from './expression/literal-expression/literal-expression.tree';

test('check to json', () => {
  const code = 'true';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree).toBeInstanceOf(LiteralExpressionTree);

  expect(tree.toJson()).toBe(`{
  "treeType": "LiteralExpression",
  "metaType": "Literal",
  "literal": {
    "treeType": "BooleanLiteral",
    "value": true
  }
}`);
});
