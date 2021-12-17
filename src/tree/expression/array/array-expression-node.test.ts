import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { ArrayExpressionNode } from './array-expression-node';

test('check array', () => {
  const code = '[1, 2+2, 4, 6+6]';
  const tree = parseExpression<ArrayExpressionNode>(code);
  expect(tree).toBeInstanceOf(ArrayExpressionNode);

  expect(tree.items.length).toBe(4);
  expect(tree.items.map((x) => evalExpression(x) as number).reduce((a, b) => a + b, 0)).toBe(
    [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
  );
});

test('array on several lines', () => {
  const code = `[1,
                2+2,
     4,    6+6]`;
  const tree = parseExpression<ArrayExpressionNode>(code);
  expect(tree).toBeInstanceOf(ArrayExpressionNode);

  expect(tree.items.length).toBe(4);
  expect(tree.items.map((x) => evalExpression(x) as number).reduce((a, b) => a + b, 0)).toBe(
    [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
  );
});
