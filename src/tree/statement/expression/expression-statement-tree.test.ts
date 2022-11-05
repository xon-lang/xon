import { InvokeExpressionTree } from '@/tree/expression/invoke/invoke-expression-tree';
import { ExpressionStatementTree } from '@/tree/statement/expression/expression-statement-tree';
import { evaluate } from '@/util/evaluate';
import { parseStatement } from '@/util/parse';

test('variable assignment', () => {
  const code = '5 + 5\n';
  const tree = parseStatement(code) as ExpressionStatementTree;

  expect(tree).toBeInstanceOf(ExpressionStatementTree);
  expect(evaluate(tree.expression)).toBe(10);
});

test('invoke', () => {
  const code = 'make()';
  const tree = parseStatement(code) as ExpressionStatementTree;

  expect(tree.expression).toBeInstanceOf(InvokeExpressionTree);
});
