import { evaluate } from '../../util/evaluate';
import { parseStatement } from '../../util/parse';
import { ExpressionStatementNode } from './expression-statement-node';

test('variable assignment', () => {
  const code = '5 + 5\n';
  const node = parseStatement<ExpressionStatementNode>(code);
  expect(node).toBeInstanceOf(ExpressionStatementNode);

  expect(evaluate(node.expression)).toBe(10);
});
