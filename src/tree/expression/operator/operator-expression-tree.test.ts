import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { parseExpression } from '~/util/parse';

test('id', () => {
  const code = 'myVariable';
  const tree = parseExpression(code) as IdExpressionTree;

  expect(tree).toBeInstanceOf(IdExpressionTree);
  expect(tree.name.text).toBe('myVariable');
});
