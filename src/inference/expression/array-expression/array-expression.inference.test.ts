import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { ExpressionStatementInference } from '../../statement/expression-statement/expression-statement.inference';
import { getStatementInference } from '../../statement/statement-inference.helper';

test('all array items are integer literals', () => {
  const code = '[1, 2, 3, 4]';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  const inference = getStatementInference(tree, new Map()) as ExpressionStatementInference;
  expect(inference.value.type.toString()).toBe('Integer[]');
});

test('array items are float, string, integer and boolean literals', () => {
  const code = '[1, 2, true, "Hi", 2.7, 4]';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  const inference = getStatementInference(tree, new Map()) as ExpressionStatementInference;
  expect(inference.value.type.toString()).toBe('(Integer | Boolean | String | Float)[]');
});
