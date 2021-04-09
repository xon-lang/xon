import { parseExpression, parseProgram } from '../../parse';
import { IdExpressionTree } from '../../tree/expression/id-expression/id-expression.tree';
import { IndexExpressionTree } from '../../tree/expression/index-expression/index-expression.tree';
import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';
import { ExpressionStatementTree } from '../../tree/statement/expression-statement/expression-statement.tree';

test('integer + integer', () => {
  const code = '1 + 16XA';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect((tree.left as LiteralExpressionTree).literal.value).toBe(1);
});

test('index + literal', () => {
  const code = `
val = [1, 2, 3]
val[1] + 2`;
  const tree = parseProgram(code);

  const operatorExpression = (tree.statements[1] as ExpressionStatementTree)
    .value as OperatorExpressionTree;
  expect(operatorExpression).toBeInstanceOf(OperatorExpressionTree);

  const { left } = operatorExpression;
  expect((left as IndexExpressionTree).object).toBeInstanceOf(IdExpressionTree);
});
