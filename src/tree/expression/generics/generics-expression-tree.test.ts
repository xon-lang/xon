import { parseExpression } from '../../../util/parse';
import { GenericsExpressionTree } from './generics-expression-tree';

test('not safe', () => {
  const code = 'abc.def<|Number|>';
  const tree = parseExpression(code) as GenericsExpressionTree;
  expect(tree).toBeInstanceOf(GenericsExpressionTree);

  expect(tree.toString()).toBe('abc.def<|Number|>');
});
