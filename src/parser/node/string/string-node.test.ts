import { StringNode } from '../../../parser/node/string/string-node';
import { parse } from '../../../parser/parser';
import { TokenNode } from '../node';
import { NodeType } from '../node-type';

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
  expect(tree.type.name).toBe('String');
  expect(tree.type.base?.name).toBe('Array');
  expect(tree.type.base?.parameters.length).toBe(1);
  expect(tree.type.base?.parameters[0].name).toBe('Char');
});

test('not closed', () => {
  const text = '"abc';
  const nodes = parse(text).root.children as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.STRING);
  expect(nodes[0].text).toBe('"abc');
});
