import { evaluate } from '../../../util/evaluate';
import { parseStatement } from '../../../util/parse';
import { AssertStatementTree } from './assert-statement-tree';

test('variable assignment', () => {
  const code = 'actual 1+1\nexpect 2';
  const tree = parseStatement(code) as AssertStatementTree;
  expect(tree).toBeInstanceOf(AssertStatementTree);

  expect(evaluate(tree.actual)).toBe(2);
  expect(evaluate(tree.expect)).toBe(2);
});
