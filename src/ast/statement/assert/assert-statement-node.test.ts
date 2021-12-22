import { evalExpression } from '../../eval';
import { parseStatement } from '../../parse';
import { AssertStatementNode } from './assert-statement-node';

test('variable assignment', () => {
  const code = 'actual 1+1\nexpect 2';
  const tree = parseStatement<AssertStatementNode>(code);
  expect(tree).toBeInstanceOf(AssertStatementNode);

  expect(evalExpression(tree.actual)).toBe(2);
  expect(evalExpression(tree.expect)).toBe(2);
});
