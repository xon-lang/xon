import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '~/tree/expression/infix/infix-expression-tree';
import { LambdaExpressionTree } from '~/tree/expression/lambda/lambda-expression-tree';
import { ExpressionStatementTree } from '~/tree/statement/expression/expression-statement-tree';
import { evaluate } from '~/util/evaluate';
import { parseExpression } from '~/util/parse';

test('has argument', () => {
  const code = '[x] => x + 42';
  const tree = parseExpression(code) as LambdaExpressionTree;

  expect(tree).toBeInstanceOf(LambdaExpressionTree);
  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name?.text).toBe('x');
  expect(
    evaluate((tree.statement as ExpressionStatementTree).expression, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('generics', () => {
  const code = '{N,M ,K:String }[x] => x + 42';
  const tree = parseExpression(code) as LambdaExpressionTree;

  expect(tree).toBeInstanceOf(LambdaExpressionTree);
  expect(tree.generics.length).toBe(3);
  expect(tree.generics[0].name?.text).toBe('N');
  expect(tree.generics[1].name?.text).toBe('M');
  expect(tree.generics[2].name?.text).toBe('K');
  expect((tree.generics[2].type as IdExpressionTree).name.text).toBe('String');
  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name?.text).toBe('x');
  expect(
    evaluate((tree.statement as ExpressionStatementTree).expression, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('no arguments', () => {
  const code = '[]=> 42+45';
  const tree = parseExpression(code) as LambdaExpressionTree;

  expect(tree).toBeInstanceOf(LambdaExpressionTree);
  expect(tree.parameters.length).toBe(0);
  expect(evaluate((tree.statement as ExpressionStatementTree).expression)).toBe(42 + 45);
});

test('method with method type', () => {
  const code = '[a] => [b, c] => 42+45';
  const tree = parseExpression(code) as LambdaExpressionTree;

  expect(tree).toBeInstanceOf(LambdaExpressionTree);
  expect(tree.parameters.length).toBe(1);
  expect((tree.statement as LambdaExpressionTree).statement).toBeInstanceOf(LambdaExpressionTree);
  expect((tree.statement as LambdaExpressionTree).parameters.length).toBe(2);
  expect((tree.statement as LambdaExpressionTree).statement).toBeInstanceOf(InfixExpressionTree);
});
