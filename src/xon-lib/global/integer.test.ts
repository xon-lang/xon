import { parseExpression, parseProgram } from '../../parse';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';
import { ExpressionStatementTree } from '../../tree/statement/expression-statement/expression-statement.tree';

test('integer + integer', () => {
  const code = '1 + 16XA';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(tree.getType().name).toBe('Integer');
  expect(tree.getType().definition().abstract.name).toBe('Number');
});

test('index + literal', () => {
  const code = `
ded:
  //

val = [1, 2, 3]
val[1] + 2`;
  const tree = parseProgram(code);
  const operatorExpression = (tree.statements[1] as ExpressionStatementTree)
    .value as OperatorExpressionTree;
  expect(operatorExpression).toBeInstanceOf(OperatorExpressionTree);
  expect(operatorExpression.getType().name).toBe('TestIndex');
});
