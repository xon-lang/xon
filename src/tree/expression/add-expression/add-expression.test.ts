import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { AddExpressionTree } from './add-expression.tree';

test('num plus num', () => {
  const code = '1+1';
  const tree = parseExpression<AddExpressionTree>(code);
  expect(tree.getType().name).toBe('Number');
  expect(evalExpression(tree)).toBe(2);
});

test('num plus bool', () => {
  const code = '1+ true';
  const tree = parseExpression<AddExpressionTree>(code);
  expect(evalExpression(tree)).toBe(2);
});

test('num plus str', () => {
  const code = "1+ 'str'";
  const tree = parseExpression<AddExpressionTree>(code);
  expect(evalExpression(tree)).toBe('1str');
});
