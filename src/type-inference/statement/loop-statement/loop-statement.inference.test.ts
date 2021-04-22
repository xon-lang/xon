import { parseStatement } from '../../../tree/parse';
import { LoopStatementTree } from '../../../tree/statement/loop-statement/loop-statement.tree';
import { ExpressionStatementInference } from '../expression-statement/expression-statement.inference';
import { getStatementInference } from '../statement-inference.helper';
import { LoopStatementInference } from './loop-statement.inference';

test('has Integer type', () => {
  const code = 'loop item, index in [1, true]: index + 2';
  const tree = parseStatement<LoopStatementTree>(code);
  expect(tree).toBeInstanceOf(LoopStatementTree);

  const inference = getStatementInference(tree, new Map()) as LoopStatementInference;
  expect(inference.value.type.toString()).toBe('Integer | Boolean');
  expect(inference.index.type.toString()).toBe('Integer');
  expect(inference.expression.type.toString()).toBe('(Integer | Boolean)[]');
  expect((inference.body[0] as ExpressionStatementInference).value.type.toString()).toBe('Integer');
});
