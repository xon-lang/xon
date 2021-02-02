import { parseExpression } from '../parse';
import { AddExpressionTree } from '../tree/expression/add-expression/add-expression.tree';

test('str + bool', () => {
  const code = "'s'+ true";
  const tree = parseExpression<AddExpressionTree>(code);
  expect(tree.getType().name).toBe('String');
});

test('str + num', () => {
  const code = "'s'+ 3";
  const tree = parseExpression<AddExpressionTree>(code);
  expect(tree.getType().name).toBe('String');
});

test('str + str', () => {
  const code = "'s'+ 'true'";
  const tree = parseExpression<AddExpressionTree>(code);
  expect(tree.getType().name).toBe('String');
});
