import { evaluate } from '../../../util/evaluate';
import { parseExpression } from '../../../util/parse';
import { SingleBodyTree } from '../../body/single/single-body-tree';
import { ExpressionStatementTree } from '../../statement/expression/expression-statement-tree';
import { MethodExpressionTree } from './method-expression-tree';

test('has argument', () => {
  const code = '(x) = x + 42';
  const tree = parseExpression(code) as MethodExpressionTree;
  expect(tree).toBeInstanceOf(MethodExpressionTree);

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name.text).toBe('x');
  expect(
    evaluate(((tree.body as SingleBodyTree).statement as ExpressionStatementTree).expression, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('no arguments', () => {
  const code = '() = 42+45';
  const tree = parseExpression(code) as MethodExpressionTree;
  expect(tree).toBeInstanceOf(MethodExpressionTree);

  expect(tree.parameters.length).toBe(0);
  expect(
    evaluate(((tree.body as SingleBodyTree).statement as ExpressionStatementTree).expression),
  ).toBe(42 + 45);
});
