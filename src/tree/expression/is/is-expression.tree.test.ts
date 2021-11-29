import { parseExpression } from '../../parse';
import { IdTypeTree } from '../../type/id/id-type.tree';
import { IdExpressionTree } from '../id/id-expression.tree';
import { IsExpressionTree } from './is-expression.tree';

test('value is string', () => {
  const code = 'value is String';
  const tree = parseExpression<IsExpressionTree>(code);
  expect(tree).toBeInstanceOf(IsExpressionTree);

  expect(tree.expression).toBeInstanceOf(IdExpressionTree);
  expect(tree.type).toBeInstanceOf(IdTypeTree);
});
