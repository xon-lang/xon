import { TokenExpressionTree } from '~/tree/expression/token/token-expression-tree';
import { parseExpression } from '~/util/parse';

test('id', () => {
  const code = 'myVariable';
  const tree = parseExpression(code) as TokenExpressionTree;

  expect(tree).toBeInstanceOf(TokenExpressionTree);
  expect(tree.name.text).toBe('myVariable');
});
