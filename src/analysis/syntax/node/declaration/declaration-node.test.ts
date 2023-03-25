import { is } from '~/analysis/is';
import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { IntegerNode } from '~/analysis/lexical/node/integer/integer-node';
import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { NodeType } from '~/analysis/node';
import { ArrayNode } from '~/analysis/syntax/node/array/array-node';
import { InvokeNode } from '~/analysis/syntax/node/invoke/invoke-node';
import { PrefixNode } from '~/analysis/syntax/node/prefix/prefix-node';
import { syntaxNode } from '~/analysis/syntax/syntax-analysis';
import { Integer } from '~/lib/core';
import { Source } from '~/source/source';
import { evaluate } from '~/util/evaluate';

test('empty', () => {
  const code = '[]';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as ArrayNode;

  expect(tree.$).toBe(NodeType.ARRAY);
  expect(tree.items.length).toBe(0);
});

test('inner empty arrays', () => {
  const code = '[[[]]]';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as ArrayNode;

  expect(tree.$).toBe(NodeType.ARRAY);
  expect(tree.items.length).toBe(1);
});

test('two integers in array', () => {
  const code = '[1, 2]';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as ArrayNode;

  expect(tree.$).toBe(NodeType.ARRAY);
  expect(tree.items.length).toBe(2);
  expect(is(tree.items[0], NodeType.INTEGER)).toBe(true);
  expect((tree.items[0] as IntegerNode).text).toBe('1');
  expect(is(tree.items[1], NodeType.INTEGER)).toBe(true);
  expect((tree.items[1] as IntegerNode).text).toBe('2');
});

test('check array', () => {
  const code = '[1, 2+2, 4, 6+6]';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as ArrayNode;

  expect(tree.$).toBe(NodeType.ARRAY);
  expect(tree.items.length).toBe(4);
  expect(tree.items.map((x) => evaluate(source, x) as Integer).reduce((a, b) => a + b, 0)).toBe(
    [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
  );
  expect(JSON.stringify(evaluate(source, tree))).toBe(JSON.stringify([1, 2 + 2, 4, 6 + 6]));
});

test('array on several lines', () => {
  const code = `[1,
                2+2,
     4,    6+6]`;
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as ArrayNode;

  expect(tree.$).toBe(NodeType.ARRAY);
  expect(tree.items.length).toBe(4);
  expect(tree.items.map((x) => evaluate(source, x) as Integer).reduce((a, b) => a + b, 0)).toBe(
    [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
  );
});

test('infix operator declaration', () => {
  const code = 'infix +(a, b)';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as InvokeNode;

  expect(tree.$).toBe(NodeType.DECLARATION);
  expect(tree.array.items.length).toBe(2);
  expect(tree.array.items.at(0)?.$).toBe(NodeType.ID);
  expect((tree.array.items[0] as IdNode).text).toBe('a');
  expect(tree.array.items.at(1)?.$).toBe(NodeType.ID);
  expect((tree.array.items[1] as IdNode).text).toBe('b');
  expect(tree.instance.$).toBe(NodeType.PREFIX);

  const prefix = tree.instance as PrefixNode;
  expect(prefix.$).toBe(NodeType.PREFIX);
  expect(prefix.operator.text).toBe('infix');
  expect(prefix.value.$).toBe(NodeType.OPERATOR);
  expect((prefix.value as OperatorNode).text).toBe('+');
});
