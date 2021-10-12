import { evalExpression } from '../../eval';
import { parseStatement } from '../../parse';
import { AssertStatementTree } from './assert-statement.tree';

test('variable assignment', () => {
  const code = 'actual 1+1\nexpect 2';
  const tree = parseStatement<AssertStatementTree>(code);
  expect(tree).toBeInstanceOf(AssertStatementTree);

  expect(evalExpression(tree.actual)).toBe(2);
  expect(evalExpression(tree.expect)).toBe(2);
});
