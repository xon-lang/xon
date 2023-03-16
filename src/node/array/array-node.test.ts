import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { Integer } from '~/lib/core';
import { ArrayNode } from '~/node/array/array-node';
import { NodeType } from '~/node/node';
import { evaluate } from '~/util/evaluate';

test('empty', () => {
  const code = '[]';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as ArrayNode;

  expect(tree.type).toBe(NodeType.ARRAY);
  expect(tree.parameters.length).toBe(0);
});

test('inner empty arrays', () => {
  const code = '[[[]]]';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as ArrayNode;

  expect(tree.type).toBe(NodeType.ARRAY);
  expect(tree.parameters.length).toBe(1);
});

test('two integers in array', () => {
  const code = '[1, 2]';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as ArrayNode;

  expect(tree.type).toBe(NodeType.ARRAY);
  expect(tree.parameters.length).toBe(2);
  expect(source.nodeText(tree.parameters[0])).toBe('1');
  expect(source.nodeText(tree.parameters[1])).toBe('2');
});

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
