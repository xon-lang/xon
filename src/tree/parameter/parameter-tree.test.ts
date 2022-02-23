import { parseParameter } from '../../util/parse';
import { SingleBodyTree } from '../body/single/single-body-tree';
import { IdExpressionTree } from '../expression/id/id-expression-tree';
import { LiteralExpressionTree } from '../expression/literal/literal-expression-tree';
import { ExpressionStatementTree } from '../statement/expression/expression-statement-tree';
import { ParameterTree } from './parameter-tree';

test('type and value', () => {
  const code = 'a Integer: 1';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.id.text).toBe('a');
  expect((tree.type as IdExpressionTree).id.name.text).toBe('Integer');
  expect(
    (
      ((tree.body as SingleBodyTree).statement as ExpressionStatementTree)
        .expression as LiteralExpressionTree
    ).literal.value,
  ).toBe(1);
});

test('value', () => {
  const code = 'a: 1';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.id.text).toBe('a');
  expect(tree.type).toBe(null);
  expect(
    (
      ((tree.body as SingleBodyTree).statement as ExpressionStatementTree)
        .expression as LiteralExpressionTree
    ).literal.value,
  ).toBe(1);
});
