import { evalExpression } from '../../eval';
import { IdExpressionNode } from '../../expression/id/id-expression-node';
import { parseStatement } from '../../parse';
import { ExpressionStatementTree } from '../expression/expression-statement.tree';
import { WhileStatementTree } from './while-statement.tree';

test('has boolean value', () => {
  const code = 'while true:\n    12+(45/5)';
  const tree = parseStatement<WhileStatementTree>(code);
  expect(tree).toBeInstanceOf(WhileStatementTree);

  expect(tree.expression).toBeInstanceOf(IdExpressionNode);
  expect((tree.expression as IdExpressionNode).id.text).toBe('true');

  expect(tree.body.length).toBe(1);
  const statement = tree.body[0] as ExpressionStatementTree;
  expect(evalExpression(statement.expression)).toBe(12 + 45 / 5);
});
