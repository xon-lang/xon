import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { LogicalAndExpressionTree } from '../logical-and-expression/logical-and-expression.tree';
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

test('has several relational operators', () => {
  // a < b and b > c
  const code = 'a<b>c';
  const tree = parseExpression<LogicalAndExpressionTree>(code);
  expect(tree).toBeInstanceOf(LogicalAndExpressionTree);

  expect(tree.left).toBeInstanceOf(OperatorExpressionTree);
  expect(tree.right).toBeInstanceOf(OperatorExpressionTree);

  const left = tree.left as OperatorExpressionTree;
  expect(left.operator).toBe('<');
  expect((left.left as IdExpressionTree).name).toBe('a');
  expect((left.right as IdExpressionTree).name).toBe('b');

  const right = tree.right as OperatorExpressionTree;
  expect(right.operator).toBe('>');
  expect((right.left as IdExpressionTree).name).toBe('b');
  expect((right.right as IdExpressionTree).name).toBe('c');
});
