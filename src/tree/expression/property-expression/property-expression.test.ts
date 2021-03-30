import { parseExpression } from '../../../parse';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { PropertyExpressionTree } from './property-expression.tree';

test('string expression index', () => {
  const code = 'abc.def';
  const tree = parseExpression<PropertyExpressionTree>(code);
  expect(tree.object).toBeInstanceOf(IdExpressionTree);
  expect((tree.object as IdExpressionTree).name).toBe('abc');
  expect(tree.name).toBe('def');
});
