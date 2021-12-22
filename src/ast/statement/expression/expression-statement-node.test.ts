import { evalExpression } from '../../eval';
import { parseStatement } from '../../parse';
import { ExpressionStatementNode } from './expression-statement-node';

test('variable assignment', () => {
  const code = '5 + 5\n';
  const tree = parseStatement<ExpressionStatementNode>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementNode);

  expect(evalExpression(tree.expression)).toBe(10);
});
