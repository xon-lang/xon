import { parseStatement } from '../../../tree/parse';
import { WhileStatementTree } from '../../../tree/statement/while-statement/while-statement.tree';
import { ExpressionStatementInference } from '../expression-statement/expression-statement.inference';
import { getStatementInference } from '../statement-inference.helper';
import { WhileStatementInference } from './while-statement.inference';

test('has Integer type', () => {
  const code = 'while true: 2';
  const tree = parseStatement<WhileStatementTree>(code);
  expect(tree).toBeInstanceOf(WhileStatementTree);

  const inference = getStatementInference(tree, new Map()) as WhileStatementInference;
  expect(inference.expression.type.toString()).toBe('Boolean');
  expect((inference.body[0] as ExpressionStatementInference).value.type.toString()).toBe('Integer');
});
