import { parseExpression, parseProgram } from '../../parse';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';
import { ExpressionStatementTree } from '../../tree/statement/expression-statement/expression-statement.tree';
import { getTypeDefinition } from '../../tree/type/get-lib-type.util';
import { PlainTypeTree } from '../../tree/type/plain-type/plain-type.tree';

test('integer + integer', () => {
  const code = '1 + 16XA';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect((tree.dataType as PlainTypeTree).name).toBe('Integer');
  expect((getTypeDefinition(tree.dataType).inheritanceType as PlainTypeTree).name).toBe('Number');
});

test('index + literal', () => {
  const code = `
val = [1, 2, 3]
val[1] + 2`;
  const tree = parseProgram(code);
  const operatorExpression = (tree.statements[1] as ExpressionStatementTree)
    .value as OperatorExpressionTree;
  expect(operatorExpression).toBeInstanceOf(OperatorExpressionTree);
  expect((operatorExpression.dataType as PlainTypeTree).name).toBe('TestIndex');
});
