import { StringNode } from '~/parser/node/string/string-node';
import { parse } from '~/parser/parser';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

test('string', () => {
  const text = '"abc   def"';
  const nodes = parse(text).root.children as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(nodes.length).toBe(1);
  expect(tree.$).toBe(NodeType.STRING);
  expect(tree.text).toBe(text);
});

test('multiline string', () => {
  const text = '"some\nmultiline\n\t\n\t\nstring\n"';
  const nodes = parse(text).root.children as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(tree.$).toBe(NodeType.STRING);
  expect(tree.text).toBe(text);
});

test('empty string', () => {
  const text = '"';
  const nodes = parse(text).root.children as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(tree.$).toBe(NodeType.STRING);
  expect(tree.text).toBe(text);
});

test('not closed', () => {
  const text = '"abc';
  const nodes = parse(text).root.children as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.STRING);
  expect(nodes[0].text).toBe('"abc');
});
