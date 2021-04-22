import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { getStatementInference } from '../statement-inference.helper';
import { ExpressionStatementInference } from './expression-statement.inference';

test('has Integer type', () => {
  const code = '1 + 1';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  const inference = getStatementInference(tree, new Map()) as ExpressionStatementInference;
  expect(inference.value.type.name).toBe('Integer');
});
