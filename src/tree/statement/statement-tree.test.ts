import { parseStatement } from '../../util/parse';
import { ExpressionStatementTree } from './expression/expression-statement-tree';

test('invoke', () => {
  const code = 'make()';
  const tree = parseStatement(code) as ExpressionStatementTree;

  expect(tree).toBeInstanceOf(ExpressionStatementTree);
});
