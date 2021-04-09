import { parseExpression } from '../../parse';
import { IdExpressionTree } from './id-expression.tree';

test('variable', () => {
  const code = 'myVariable';
  const tree = parseExpression<IdExpressionTree>(code);
  expect(tree).toBeInstanceOf(IdExpressionTree);

  expect(tree.name).toBe(code);
});
