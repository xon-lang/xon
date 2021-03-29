import { parseExpression } from '../../parse';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';
import { PlainTypeTree } from '../../tree/type/plain-type/plain-type.tree';

test('str + bool', () => {
  const code = '"s"+ true';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect((tree.dataType as PlainTypeTree).name).toBe('String');
});

test('str + num', () => {
  const code = '"s"+ 3';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect((tree.dataType as PlainTypeTree).name).toBe('String');
});

test('str + str', () => {
  const code = '"s"+ "true"';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect((tree.dataType as PlainTypeTree).name).toBe('String');
});
