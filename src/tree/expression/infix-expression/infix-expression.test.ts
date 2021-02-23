import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { InfixExpressionTree } from './infix-expression.tree';

test('num plus num', () => {
  const code = '1+1';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(tree.getType().name).toBe('Integer');
  expect(evalExpression(tree)).toBe(2);
});

test('num plus bool', () => {
  const code = '1+ true';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(evalExpression(tree)).toBe(2);
});

test('num plus str', () => {
  const code = '1  + "str"';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(evalExpression(tree)).toBe('1str');
});
