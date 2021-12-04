import { parseExpression } from '../../parse';
import { IdExpressionTree } from './id-expression.tree';

test('id', () => {
  const code = 'myVariable';
  const tree = parseExpression<IdExpressionTree>(code);
  expect(tree).toBeInstanceOf(IdExpressionTree);

  expect(tree.id.text).toBe('myVariable');
});
