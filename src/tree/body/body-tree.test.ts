import { LiteralExpressionTree } from '../expression/literal-expression/literal-expression.tree';
import { parseBody } from '../parse';
import { ExpressionStatementTree } from '../statement/expression-statement/expression-statement.tree';
import { BodyTree } from './body-tree';

test('assign expression', () => {
  const code = '= 123';
  const tree = parseBody(code);
  expect(tree).toBeInstanceOf(BodyTree);

  expect(tree.isAssign).toBe(true);
  expect(tree.statements.length).toBe(1);
  expect(
    ((tree.statements[0] as ExpressionStatementTree).expression as LiteralExpressionTree).literal
      .value,
  ).toBe(123);
});

test('assign expression', () => {
  const code = ': 123';
  const tree = parseBody(code);
  expect(tree).toBeInstanceOf(BodyTree);

  expect(tree.isAssign).toBe(false);
  expect(tree.statements.length).toBe(1);
  expect(
    ((tree.statements[0] as ExpressionStatementTree).expression as LiteralExpressionTree).literal
      .value,
  ).toBe(123);
});
