import { IntegerNode } from '~/analysis/lexical/node/integer/integer-node';
import { NodeType } from '~/analysis/node';
import { FloatNode } from '~/analysis/syntax/node/float/float-node';
import { parseExpression } from '~/analysis/syntax/syntax-analysis';
import { Source } from '~/source/source';

test('123.456', () => {
  const code = '123.456';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as FloatNode;

  expect(tree.type).toBe(NodeType.FLOAT);
  expect(tree.left.text).toBe('123');
  expect(tree.right.text).toBe('456');
});

test('positive float number', () => {
  const code = '123.456';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as FloatNode;

  expect(tree.type).toBe(NodeType.FLOAT);
  expect(tree.operator.text).toBe('.');
  expect((tree.left as IntegerNode).text).toBe('123');
  expect((tree.right as IntegerNode).text).toBe('456');
});

test('zero float number', () => {
  const code = '2x0.1';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as FloatNode;

  expect(tree.type).toBe(NodeType.FLOAT);
  expect(tree.operator.text).toBe('.');
  expect((tree.left as IntegerNode).text).toBe('2x0');
  expect((tree.right as IntegerNode).text).toBe('1');
});

test('underscore in number', () => {
  const code = '5_999_245.15463_64';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as FloatNode;

  expect(tree.type).toBe(NodeType.FLOAT);
  expect(tree.operator.text).toBe('.');
  expect((tree.left as IntegerNode).text).toBe('5_999_245');
  expect((tree.right as IntegerNode).text).toBe('15463_64');
});

test('radix float', () => {
  const code = '2x11.011001100110011001100110011001100110011001100110011';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as FloatNode;

  expect(tree.type).toBe(NodeType.FLOAT);
  expect(tree.operator.text).toBe('.');
  expect((tree.left as IntegerNode).text).toBe('2x11');
  expect((tree.right as IntegerNode).text).toBe('011001100110011001100110011001100110011001100110011');
});

test('16x123ABC_123.DDD12', () => {
  const code = '16x123ABC_123.DDD12';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as FloatNode;

  expect(tree.type).toBe(NodeType.FLOAT);
  expect(tree.operator.text).toBe('.');
  expect((tree.left as IntegerNode).text).toBe('16x123ABC_123');
  expect((tree.right as IntegerNode).text).toBe('DDD12');
});