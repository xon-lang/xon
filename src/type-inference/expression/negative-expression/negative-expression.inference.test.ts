import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { fillExpressionTypes } from '../expression-inference.helper';

test('integer operand', () => {
  const code = '-1';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  fillExpressionTypes(tree.value, new Map());
  expect(tree.value.type.toString()).toBe('Integer');
});

test('float operand', () => {
  const code = '-1.1';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  fillExpressionTypes(tree.value, new Map());
  expect(tree.value.type.toString()).toBe('Float');
});
