import { evalExpression } from '../../util/eval';
import { parseStatement } from '../../util/parse';
import { AssertStatementNode } from './assert-statement-node';

test('variable assignment', () => {
  const code = 'actual 1+1\nexpect 2';
  const node = parseStatement<AssertStatementNode>(code);
  expect(node).toBeInstanceOf(AssertStatementNode);

  expect(evalExpression(node.actual)).toBe(2);
  expect(evalExpression(node.expect)).toBe(2);
});
