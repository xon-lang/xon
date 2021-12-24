import { MultipleBodyNode } from '../../body/multiple/multiple-body-node';
import { evaluate } from '../../util/evaluate';
import { IdExpressionNode } from '../../expression/id/id-expression-node';
import { parseStatement } from '../../util/parse';
import { ExpressionStatementNode } from '../expression/expression-statement-node';
import { WhileStatementNode } from './while-statement-node';

test('has boolean value', () => {
  const code = 'while true:\n    12+(45/5)';
  const node = parseStatement<WhileStatementNode>(code);
  expect(node).toBeInstanceOf(WhileStatementNode);

  expect(node.expression).toBeInstanceOf(IdExpressionNode);
  expect((node.expression as IdExpressionNode).id.name.text).toBe('true');

  const statement = (node.body as MultipleBodyNode).statements[0] as ExpressionStatementNode;
  expect(evaluate(statement.expression)).toBe(12 + 45 / 5);
});
