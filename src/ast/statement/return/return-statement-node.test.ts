import { evalExpression } from '../../eval';
import { parseStatement } from '../../parse';
import { ReturnStatementNode } from './return-statement-node';

test('return in scope', () => {
  const code = 'return 6+6';
  const tree = parseStatement<ReturnStatementNode>(code);
  expect(tree).toBeInstanceOf(ReturnStatementNode);

  const returnStatement = tree as ReturnStatementNode;
  expect(evalExpression(returnStatement.value)).toBe(6 + 6);
});
