import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { ExpressionStatementInference } from '../../statement/expression-statement/expression-statement.inference';
import { getStatementInference } from '../../statement/statement-inference.helper';

test('all array items are integer literals', () => {
  const code = '\\x: 1 + 1';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  const inference = getStatementInference(tree, new Map()) as ExpressionStatementInference;
  expect(inference.value.type.toString()).toBe('(Any) Integer');
});
