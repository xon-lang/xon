import { parseExpression } from '../../util/parse';
import { LiteralExpressionTree } from './literal-expression-tree';

test('check true', () => {
  const code = '123';
  const tree = parseExpression(code) as LiteralExpressionTree;
  expect(tree).toBeInstanceOf(LiteralExpressionTree);

  expect(tree.literal.value).toBe(123);
});
