import { parseExpression } from '../parse';
import { AddExpressionTree } from '../tree/expression/add-expression/add-expression.tree';

test('bool + bool', () => {
  const code = 'true +false';
  const tree = parseExpression<AddExpressionTree>(code);
  expect(tree.getType().name).toBe('Number');
});
