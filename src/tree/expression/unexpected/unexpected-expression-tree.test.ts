import { UnexpectedExpressionTree } from '~/tree/expression/unexpected/unexpected-expression-tree';
import { parseExpression } from '~/util/parse';

test('id', () => {
  const code = 'ºª¶';
  const tree = parseExpression(code) as UnexpectedExpressionTree;

  expect(tree).toBeInstanceOf(UnexpectedExpressionTree);
  expect(tree.value.text).toBe('ºª¶');
});
