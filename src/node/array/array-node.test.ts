import { Integer } from '~/lib/core';
import { ArrayNode } from '~/node/array/array-node';
import { NodeType } from '~/node/node';
import { parseExpression } from '~/parser/parser';
import { Source } from '~/parser/source/source';
import { evaluate } from '~/util/evaluate';

test('check array', () => {
  const code = '[1, 2+2, 4, 6+6]';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as ArrayNode;

  expect(tree.type).toBe(NodeType.ARRAY);
  expect(tree.parameters.length).toBe(4);
  expect(tree.parameters.map((x) => evaluate(source, x) as Integer).reduce((a, b) => a + b, 0)).toBe(
    [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
  );
  expect(JSON.stringify(evaluate(source, tree))).toBe(JSON.stringify([1, 2 + 2, 4, 6 + 6]));
});

test('array on several lines', () => {
  const code = `[1,
                2+2,
     4,    6+6]`;
  const source = Source.fromText(code);
  const tree = parseExpression(source) as ArrayNode;

  expect(tree.type).toBe(NodeType.ARRAY);
  expect(tree.parameters.length).toBe(4);
  expect(tree.parameters.map((x) => evaluate(source, x) as Integer).reduce((a, b) => a + b, 0)).toBe(
    [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
  );
});
