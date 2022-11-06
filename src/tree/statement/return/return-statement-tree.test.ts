import { evaluate } from '../../../util/evaluate';
import { parseStatement } from '../../../util/parse';
import { ReturnStatementTree } from './return-statement-tree';

test('return in scope', () => {
  const code = 'return 6+6';
  const tree = parseStatement({ code }) as ReturnStatementTree;

  expect(tree).toBeInstanceOf(ReturnStatementTree);
  const returnStatement = tree as ReturnStatementTree;
  expect(evaluate(returnStatement.value)).toBe(6 + 6);
});
