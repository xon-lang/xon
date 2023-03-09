import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { UnexpectedExpressionTree } from '~/tree/expression/unexpected/unexpected-expression-tree';
import { parseExpression } from '~/util/parse';

test('id', () => {
  const code = 'ºª¶';
  const tree = parseExpression(code) as UnexpectedExpressionTree;

  expect(tree).toBeInstanceOf(UnexpectedExpressionTree);
  expect(tree.tokens.length).toBe(3);
  expect(tree.sourceSpan.getText()).toBe('ºª¶');
});
