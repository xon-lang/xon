import { Integer } from '~/lib/core';
import { ArrayNode } from '~/tree/expression/array/array-expression-tree';
import { evaluate } from '~/util/evaluate';
import { parseExpression } from '~/util/parse';

test('check array', () => {
  const code = '[1, 2+2, 4, 6+6]';
  const tree = parseExpression(code) as ArrayNode;

  expect(tree).toBeInstanceOf(ArrayNode);
  expect(tree.parameters.length).toBe(4);
  expect(tree.parameters.map((x) => evaluate(x) as Integer).reduce((a, b) => a + b, 0)).toBe(
    [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
  );
  expect(JSON.stringify(evaluate(tree))).toBe(JSON.stringify([1, 2 + 2, 4, 6 + 6]));
});

test('array on several lines', () => {
  const code = `[1,
                2+2,
     4,    6+6]`;
  const tree = parseExpression(code) as ArrayNode;

  expect(tree).toBeInstanceOf(ArrayNode);
  expect(tree.parameters.length).toBe(4);
  expect(tree.parameters.map((x) => evaluate(x) as Integer).reduce((a, b) => a + b, 0)).toBe(
    [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
  );
});
