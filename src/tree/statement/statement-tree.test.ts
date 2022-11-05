import { ExpressionStatementTree } from '@/tree/statement/expression/expression-statement-tree';
import { parseStatement } from '@/util/parse';

test('invoke', () => {
  const code = 'make()';
  const tree = parseStatement(code) as ExpressionStatementTree;

  expect(tree).toBeInstanceOf(ExpressionStatementTree);
});
