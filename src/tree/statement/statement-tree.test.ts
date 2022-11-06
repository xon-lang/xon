import { ExpressionStatementTree } from '~/tree';
import { parseStatement } from '~/util';

test('invoke', () => {
  const code = 'make()';
  const tree = parseStatement(code) as ExpressionStatementTree;

  expect(tree).toBeInstanceOf(ExpressionStatementTree);
});
