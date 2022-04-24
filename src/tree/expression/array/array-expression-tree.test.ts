import { Number } from '../../../lib/core';
import { evaluate } from '../../../util/evaluate';
import { parseExpression } from '../../../util/parse';
import { ArrayExpressionTree } from './array-expression-tree';

test('check array', () => {
  const code = '[1, 2+2, 4, 6+6]';
  const tree = parseExpression(code) as ArrayExpressionTree;

  expect(tree).toBeInstanceOf(ArrayExpressionTree);
  expect(tree.arguments.length).toBe(4);
  expect(tree.arguments.map((x) => evaluate(x.value) as Number).reduce((a, b) => a + b, 0)).toBe(
    [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
  );
  expect(JSON.stringify(evaluate(tree))).toBe(JSON.stringify([1, 2 + 2, 4, 6 + 6]));
});

test('array on several lines', () => {
  const code = `[1,
                2+2,
     4,    6+6]`;
  const tree = parseExpression(code) as ArrayExpressionTree;

  expect(tree).toBeInstanceOf(ArrayExpressionTree);
  expect(tree.arguments.length).toBe(4);
  expect(tree.arguments.map((x) => evaluate(x.value) as Number).reduce((a, b) => a + b, 0)).toBe(
    [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
  );
});
