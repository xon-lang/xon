import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { OperatorExpressionTree } from './operator-expression.tree';

test('num plus num', () => {
  const code = '1+1';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(tree).toBeInstanceOf(OperatorExpressionTree);

  expect(evalExpression(tree)).toBe(2);
});

test('num plus bool', () => {
  const code = '1+ true';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(tree).toBeInstanceOf(OperatorExpressionTree);
  
  expect(evalExpression(tree)).toBe(2);
});

test('num plus str', () => {
  const code = '1  + "str"';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(tree).toBeInstanceOf(OperatorExpressionTree);
  
  expect(evalExpression(tree)).toBe('1str');
});
