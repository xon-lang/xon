import { parseStatement } from '../../../tree/parse';
import { IfStatementTree } from '../../../tree/statement/if-statement/if-statement.tree';
import { ExpressionStatementInference } from '../expression-statement/expression-statement.inference';
import { getStatementInference } from '../statement-inference.helper';
import { IfStatementInference } from './if-statement.inference';

test('has Integer type', () => {
  const code = 'if true: 2 else: 3.5';
  const tree = parseStatement<IfStatementTree>(code);
  expect(tree).toBeInstanceOf(IfStatementTree);

  const inference = getStatementInference(tree, new Map()) as IfStatementInference;
  expect(inference.condition.type.toString()).toBe('Boolean');
  expect((inference.thenBody[0] as ExpressionStatementInference).value.type.toString()).toBe(
    'Integer',
  );
  expect((inference.elseBody[0] as ExpressionStatementInference).value.type.toString()).toBe(
    'Float',
  );
});
