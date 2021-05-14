import { parseStatement } from '../../../tree/parse';
import { AssertStatementTree } from '../../../tree/statement/assert-statement/assert-statement.tree';
import { getStatementInference } from '../statement-inference.helper';
import { AssertStatementInference } from './assert-statement.inference';

test('has Integer type', () => {
  const code = 'actual: 1 + 1\nexpect: true';
  const tree = parseStatement<AssertStatementTree>(code);
  expect(tree).toBeInstanceOf(AssertStatementTree);

  const inference = getStatementInference(tree, new Map()) as AssertStatementInference;
  expect(inference.actual.type.name).toBe('Integer');
  expect(inference.expect.type.name).toBe('Boolean');
});
