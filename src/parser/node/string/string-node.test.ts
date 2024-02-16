import { StringNode } from '../../../parser/node/string/string-node';
import { parse } from '../../../parser/parser';
import { $Node, TokenNode } from '../node';

test('string', () => {
  const text = '"abc   def"';
  const nodes = parse(text).root.children as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(nodes.length).toBe(1);
  expect(tree.$).toBe($Node.STRING);
  expect(tree.text).toBe(text);
});

test('multiline string', () => {
  const text = '"some\nmultiline\n\t\n\t\nstring\n"';
  const nodes = parse(text).root.children as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(tree.$).toBe($Node.STRING);
  expect(tree.text).toBe(text);
});

test('empty string', () => {
  const text = '"';
  const nodes = parse(text).root.children as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(tree.$).toBe($Node.STRING);
  expect(tree.text).toBe(text);
  expect(tree.meta.declaration.name).toBe('String');
  expect(tree.meta.declaration.restriction?.declaration?.name).toBe('Array');
  expect(tree.meta.declaration.restriction?.declaration?.parameters.length).toBe(1);
  expect(tree.meta.declaration?.parameters[0].name).toBe('Char');
  expect(Object.keys(tree.meta.declaration.attributes).length).toBe(1);
  expect(Object.keys(tree.meta.declaration.attributes)[0]).toBe('length');
  expect(tree.meta.declaration.attributes.length.length).toBe(1);
  expect(tree.meta.declaration.attributes.length[0].name).toBe('Integer');
});

test('not closed', () => {
  const text = '"abc';
  const nodes = parse(text).root.children as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe($Node.STRING);
  expect(nodes[0].text).toBe('"abc');
});
