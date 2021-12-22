import { evalExpression } from '../../eval';
import { IdExpressionNode } from '../../expression/id/id-expression-node';
import { parseStatement } from '../../parse';
import { ExpressionStatementNode } from '../expression/expression-statement-node';
import { WhileStatementNode } from './while-statement-node';

test('has boolean value', () => {
  const code = 'while true:\n    12+(45/5)';
  const tree = parseStatement<WhileStatementNode>(code);
  expect(tree).toBeInstanceOf(WhileStatementNode);

  expect(tree.expression).toBeInstanceOf(IdExpressionNode);
  expect((tree.expression as IdExpressionNode).id.text).toBe('true');

  expect(tree.body.length).toBe(1);
  const statement = tree.body[0] as ExpressionStatementNode;
  expect(evalExpression(statement.expression)).toBe(12 + 45 / 5);
});
