import { evalExpression } from '../../util/eval';
import { parseExpression } from '../../util/parse';
import { ArrayExpressionNode } from './array-expression-node';

test('check array', () => {
  const code = '[1, 2+2, 4, 6+6]';
  const node = parseExpression<ArrayExpressionNode>(code);
  expect(node).toBeInstanceOf(ArrayExpressionNode);

  expect(node.items.length).toBe(4);
  expect(node.items.map((x) => evalExpression(x) as number).reduce((a, b) => a + b, 0)).toBe(
    [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
  );
});

test('array on several lines', () => {
  const code = `[1,
                2+2,
     4,    6+6]`;
  const node = parseExpression<ArrayExpressionNode>(code);
  expect(node).toBeInstanceOf(ArrayExpressionNode);

  expect(node.items.length).toBe(4);
  expect(node.items.map((x) => evalExpression(x) as number).reduce((a, b) => a + b, 0)).toBe(
    [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
  );
});
