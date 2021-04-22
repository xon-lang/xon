import { parseStatement } from '../../../tree/parse';
import { ForStatementTree } from '../../../tree/statement/for-statement/for-statement.tree';
import { ExpressionStatementInference } from '../expression-statement/expression-statement.inference';
import { getStatementInference } from '../statement-inference.helper';
import { ForStatementInference } from './for-statement.inference';

test('has Integer type', () => {
  const code = 'for item, index in [1, true]: index + 2';
  const tree = parseStatement<ForStatementTree>(code);
  expect(tree).toBeInstanceOf(ForStatementTree);

  const inference = getStatementInference(tree, new Map()) as ForStatementInference;
  expect(inference.value.type.toString()).toBe('Integer | Boolean');
  expect(inference.index.type.toString()).toBe('Integer');
  expect(inference.expression.type.toString()).toBe('(Integer | Boolean)[]');
  expect((inference.body[0] as ExpressionStatementInference).value.type.toString()).toBe('Integer');
});
