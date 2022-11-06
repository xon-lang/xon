import { ReturnStatementTree } from '~/tree/statement/return/return-statement-tree';
import { evaluate } from '~/util/evaluate';
import { parseStatement } from '~/util/parse';

test('return in scope', () => {
  const code = 'return 6+6';
  const tree = parseStatement(code) as ReturnStatementTree;

  expect(tree).toBeInstanceOf(ReturnStatementTree);
  const returnStatement = tree as ReturnStatementTree;
  expect(evaluate(returnStatement.value)).toBe(6 + 6);
});
