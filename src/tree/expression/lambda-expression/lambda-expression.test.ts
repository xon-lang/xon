import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { LambdaExpressionTree } from './lambda-expression.tree';

test('with arg type', () => {
  const code = '\\x Number: x + 42';
  const tree = parseExpression<LambdaExpressionTree>(code);
  expect(tree.args.length).toBe(1);
  expect(tree.args[0].name).toBe('x');
  expect(tree.args[0].type.name).toBe('Number');
  expect(evalExpression(tree.body, { x: 37 })).toBe(37 + 42);
});

test('without arg type', () => {
  const code = '\\x: x + 42';
  const tree = parseExpression<LambdaExpressionTree>(code);
  expect(tree.args.length).toBe(1);
  expect(tree.args[0].name).toBe('x');
  expect(tree.args[0].type).toBeFalsy();
  expect(evalExpression(tree.body, { x: 37 })).toBe(37 + 42);
});

test('no args', () => {
  const code = '\\42+45';
  const tree = parseExpression<LambdaExpressionTree>(code);
  expect(tree.args.length).toBe(0);
  expect(evalExpression(tree.body)).toBe(42 + 45);
});
