import { AssertStatementTree } from '~/tree';
import { evaluate, parseStatement } from '~/util';

test('variable assignment', () => {
  const code = 'actual 1+1\nexpect 2';
  const tree = parseStatement({ code }) as AssertStatementTree;

  expect(tree).toBeInstanceOf(AssertStatementTree);
  expect(evaluate(tree.actualExpression)).toBe(2);
  expect(evaluate(tree.expectExpression)).toBe(2);
});
