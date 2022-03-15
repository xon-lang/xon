import { parseStatement } from '../../../util/parse';
import { SingleBodyTree } from '../../body/single/single-body-tree';
import { IdExpressionTree } from '../../expression/id/id-expression-tree';
import { LiteralExpressionTree } from '../../expression/literal/literal-expression-tree';
import { ExpressionStatementTree } from '../expression/expression-statement-tree';
import { AssignmentStatementTree } from './assignment-statement-tree';

test('variable assignment colon', () => {
  const code = 'a : 1';
  const tree = parseStatement(code) as AssignmentStatementTree;

  expect(tree).toBeInstanceOf(AssignmentStatementTree);
  expect((tree.variable as IdExpressionTree).name.text).toBe('a');
  expect(
    (
      ((tree.body as SingleBodyTree).statement as ExpressionStatementTree)
        .expression as LiteralExpressionTree
    ).literal.value,
  ).toBe(1);
  expect(tree.toString()).toBe('a: 1');
});

test('variable assignment equals', () => {
  const code = 'a  =  1';
  const tree = parseStatement(code) as AssignmentStatementTree;

  expect(tree).toBeInstanceOf(AssignmentStatementTree);
  expect((tree.variable as IdExpressionTree).name.text).toBe('a');
  expect(
    (
      ((tree.body as SingleBodyTree).statement as ExpressionStatementTree)
        .expression as LiteralExpressionTree
    ).literal.value,
  ).toBe(1);
  expect(tree.toString()).toBe('a = 1');
});
