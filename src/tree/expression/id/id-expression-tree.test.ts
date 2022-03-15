import { parseExpression } from '../../../util/parse';
import { IdExpressionTree } from './id-expression-tree';

test('id', () => {
  const code = 'myVariable';
  const tree = parseExpression(code) as IdExpressionTree;

  expect(tree).toBeInstanceOf(IdExpressionTree);
  expect(tree.name.text).toBe('myVariable');
});
