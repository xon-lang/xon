import { IdExpressionTree } from '~/tree';
import { parseExpression } from '~/util';

test('id', () => {
  const code = 'myVariable';
  const tree = parseExpression(code) as IdExpressionTree;

  expect(tree).toBeInstanceOf(IdExpressionTree);
  expect(tree.name.text).toBe('myVariable');
});
