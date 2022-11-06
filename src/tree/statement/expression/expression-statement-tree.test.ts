import { ExpressionStatementTree, InvokeExpressionTree } from '~/tree';
import { evaluate, parseStatement } from '~/util';

test('variable assignment', () => {
  const code = '5 + 5\n';
  const tree = parseStatement({ code }) as ExpressionStatementTree;

  expect(tree).toBeInstanceOf(ExpressionStatementTree);
  expect(evaluate(tree.expression)).toBe(10);
});

test('invoke', () => {
  const code = 'make()';
  const tree = parseStatement({ code }) as ExpressionStatementTree;

  expect(tree.expression).toBeInstanceOf(InvokeExpressionTree);
});
