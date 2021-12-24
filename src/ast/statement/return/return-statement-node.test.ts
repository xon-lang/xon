import { evaluate } from '../../util/evaluate';
import { parseStatement } from '../../util/parse';
import { ReturnStatementNode } from './return-statement-node';

test('return in scope', () => {
  const code = 'return 6+6';
  const node = parseStatement<ReturnStatementNode>(code);
  expect(node).toBeInstanceOf(ReturnStatementNode);

  const returnStatement = node as ReturnStatementNode;
  expect(evaluate(returnStatement.value)).toBe(6 + 6);
});
