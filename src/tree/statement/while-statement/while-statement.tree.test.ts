import { evalExpression } from '../../eval';
import { LiteralExpressionTree } from '../../expression/literal-expression/literal-expression.tree';
import { parseStatement } from '../../parse';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';
import { WhileStatementTree } from './while-statement.tree';

test('has boolean value', () => {
  const code = 'while true:\n    12+(45/5)';
  const tree = parseStatement<WhileStatementTree>(code);
  expect(tree).toBeInstanceOf(WhileStatementTree);

  expect(tree.expression).toBeInstanceOf(LiteralExpressionTree);

  expect(tree.body.length).toBe(1);
  const statement = tree.body[0] as ExpressionStatementTree;
  expect(evalExpression(statement.value)).toBe(12 + 45 / 5);
});
