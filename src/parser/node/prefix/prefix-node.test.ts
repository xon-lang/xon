import { PrefixNode } from '../../../parser/node/prefix/prefix-node';
import { parse } from '../../../parser/parser';
import { evaluate } from '../../../util/evaluate';
import { InfixNode } from '../infix/infix-node';
import { $Node } from '../node-type';

test('negative integer', () => {
  const text = '-1';
  const nodes = parse(text).root.children;
  const node = nodes[0] as PrefixNode;

  expect(node.$).toBe($Node.PREFIX);
  expect(node.operator.text).toBe('-');
  expect(evaluate(node)).toBe(-1);
});

test('infix modifier', () => {
  const text = 'infix';
  const ast = parse(text);
  const nodes = ast.root.children;
  const node = nodes[0] as PrefixNode;

  expect(nodes.length).toBe(1);
  expect(node.$).toBe($Node.PREFIX);
  expect(node.operator.text).toBe('infix');
  expect(node.value).toBe(null);
});

test('model string', () => {
  const text = 'model String';
  const ast = parse(text);
  const nodes = ast.root.children;
  const types = ast.types;
  const node = nodes[0] as PrefixNode;

  expect(nodes.length).toBe(1);
  expect(node.$).toBe($Node.PREFIX);
  expect(node.operator.text).toBe('model');

  expect(types.length).toBe(1);
  expect(types[0].name).toBe('String');
});

test('model string with base class', () => {
  const text = 'model Array\nmodel String: Array';
  const ast = parse(text);
  const nodes = ast.root.children;
  const types = ast.types;
  const node = nodes[1] as InfixNode;

  expect(nodes.length).toBe(2);
  expect(node.$).toBe($Node.INFIX);
  expect(node.operator.text).toBe(':');

  expect(node.left?.$).toBe($Node.PREFIX);
  expect((node.left as PrefixNode).operator.text).toBe('model');

  expect(types.length).toBe(2);
  expect(types[0].name).toBe('Array');
  expect(types[1].name).toBe('String');
  expect(types[1].base?.name).toBe('Array');
});
