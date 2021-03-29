import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { ParenthesizedExpressionTree } from '../parenthesized-expression/parenthesized-expression.tree';
import { StringFormatExpressionTree } from './string-format-expression.tree';

test('format simple string', () => {
  const code = '"2 + 2 = {2 + 2}"';
  const tree = parseExpression<StringFormatExpressionTree>(code);
  expect(tree).toBeInstanceOf(StringFormatExpressionTree);
  expect(tree.value).toBeInstanceOf(ParenthesizedExpressionTree);
  expect(evalExpression(tree.value)).toBe(`2 + 2 = ${2 + 2}`);
});

test('format escaped string', () => {
  const code = '"1+1 = {1 + 1}; \\"2+2 = {2+2}"';
  const tree = parseExpression<StringFormatExpressionTree>(code);
  expect(tree).toBeInstanceOf(StringFormatExpressionTree);
  expect(tree.value).toBeInstanceOf(ParenthesizedExpressionTree);
  expect(evalExpression(tree.value)).toBe(`1+1 = ${1 + 1}; "2+2 = ${2 + 2}`);
});
