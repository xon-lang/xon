import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { ArrayExpressionTree } from './array-expression.tree';

test('check array', () => {
  const code = '[1, 2+2, 4, 6+6]';
  const tree = parseExpression<ArrayExpressionTree>(code);
  expect(tree).toBeInstanceOf(ArrayExpressionTree);

  expect(tree.arguments.length).toBe(4);
  expect(
    tree.arguments.map((x) => evalExpression(x.value) as number).reduce((a, b) => a + b, 0),
  ).toBe([1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0));
});

test('array on several lines', () => {
  const code = `[1,
                2+2,
     4,    6+6]`;
  const tree = parseExpression<ArrayExpressionTree>(code);
  expect(tree).toBeInstanceOf(ArrayExpressionTree);

  expect(tree.arguments.length).toBe(4);
  expect(
    tree.arguments.map((x) => evalExpression(x.value) as number).reduce((a, b) => a + b, 0),
  ).toBe([1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0));
});
