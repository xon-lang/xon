import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { InfixExpressionTree } from './infix-expression.tree';

test('num plus num', () => {
  const code = '1+1';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(tree).toBeInstanceOf(InfixExpressionTree);

  expect(evalExpression(tree)).toBe(2);
});

test('num plus str', () => {
  const code = '1  + "str"';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(tree).toBeInstanceOf(InfixExpressionTree);

  expect(evalExpression(tree)).toBe('1str');
});

test('has several relational operators', () => {
  // a < b and b > c
  const code = 'a<b>c';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(tree).toBeInstanceOf(InfixExpressionTree);

  expect(tree.left).toBeInstanceOf(InfixExpressionTree);
  expect(tree.right).toBeInstanceOf(InfixExpressionTree);

  const left = tree.left as InfixExpressionTree;
  expect(left.id.text).toBe('<');
  expect((left.left as IdExpressionTree).id.text).toBe('a');
  expect((left.right as IdExpressionTree).id.text).toBe('b');

  const right = tree.right as InfixExpressionTree;
  expect(right.id.text).toBe('>');
  expect((right.left as IdExpressionTree).id.text).toBe('b');
  expect((right.right as IdExpressionTree).id.text).toBe('c');
});

test('value is string', () => {
  const code = 'value is String';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(tree).toBeInstanceOf(InfixExpressionTree);

  expect(tree.id.text).toBe('is');
  expect(tree.left).toBeInstanceOf(IdExpressionTree);
  expect(tree.right).toBeInstanceOf(IdExpressionTree);
});
