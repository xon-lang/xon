import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { PowExpressionTree } from './pow-expression.tree';

test('pow positive', () => {
  const code = '2^5';
  const tree = parseExpression(code);
  expect(tree).toBeInstanceOf(PowExpressionTree);
  expect(evalExpression((tree as PowExpressionTree).left)).toBe(2);
  expect(evalExpression((tree as PowExpressionTree).right)).toBe(5);
  expect(evalExpression(tree)).toBe(2 ** 5);
});

test('pow negative', () => {
  const code = '-(10^-2)';
  const tree = parseExpression(code);
  expect(evalExpression(tree)).toBe(-(10 ** -2));
});

test('pow negative in parens', () => {
  const code = '(-10)^-2';
  const tree = parseExpression(code);
  expect(evalExpression(tree)).toBe((-10) ** -2);
});

test('pow  fraction', () => {
  const code = '-10^-(10/2)';
  const tree = parseExpression(code);
  expect(evalExpression(tree)).toBe(-(10 ** -(10 / 2)));
});
