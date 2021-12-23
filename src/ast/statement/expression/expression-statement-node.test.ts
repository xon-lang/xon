import { evalExpression } from '../../eval';
import { parseStatement } from '../../parse';
import { ExpressionStatementNode } from './expression-statement-node';

test('variable assignment', () => {
  const code = '5 + 5\n';
  const node = parseStatement<ExpressionStatementNode>(code);
  expect(node).toBeInstanceOf(ExpressionStatementNode);

  expect(evalExpression(node.expression)).toBe(10);
});
