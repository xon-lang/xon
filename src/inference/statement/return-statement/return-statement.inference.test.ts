import { parseStatement } from '../../../tree/parse';
import { ReturnStatementTree } from '../../../tree/statement/return-statement/return-statement.tree';
import { getStatementInference } from '../statement-inference.helper';
import { ReturnStatementInference } from './return-statement.inference';

test('has Integer type value', () => {
  const code = 'return "111" + 777';
  const tree = parseStatement<ReturnStatementTree>(code);
  expect(tree).toBeInstanceOf(ReturnStatementTree);

  const inference = getStatementInference(tree, new Map()) as ReturnStatementInference;
  expect(inference.value.type.toString()).toBe('String');
});

test('has no value', () => {
  const code = 'return';
  const tree = parseStatement<ReturnStatementTree>(code);
  expect(tree).toBeInstanceOf(ReturnStatementTree);

  const inference = getStatementInference(tree, new Map()) as ReturnStatementInference;
  expect(inference.value).toBe(null);
});
