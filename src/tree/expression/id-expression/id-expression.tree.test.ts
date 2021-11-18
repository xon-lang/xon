import { parseExpression } from '../../parse';
import { IdExpressionTree } from './id-expression.tree';

test('id', () => {
  const code = 'myVariable';
  const tree = parseExpression<IdExpressionTree>(code);
  expect(tree).toBeInstanceOf(IdExpressionTree);

  expect(tree.id.text).toBe('myVariable');
});

test('id with generics', () => {
  const code = 'abc<String, Number>';
  const tree = parseExpression<IdExpressionTree>(code);
  expect(tree).toBeInstanceOf(IdExpressionTree);

  expect(tree.id.text).toBe('abc');
  expect(tree.genericArguments.length).toBe(2);
  expect(tree.genericArguments[0].toString()).toBe('String');
  expect(tree.genericArguments[1].toString()).toBe('Number');
});
