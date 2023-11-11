import { GroupNode } from '~/parser/node/group/group-node';
import { InfixNode } from '~/parser/node/infix/infix-node';
import { IntegerNode } from '~/parser/node/integer/integer-node';
import { Parser } from '~/parser/parser';
import { is } from '~/parser/util/is';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';

test('empty object', () => {
  const text = '{}';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse()[0];
  const tree = nodes[0];

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.OBJECT);
});

test('single item', () => {
  const text = '[123 456]';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse()[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.items.length).toBe(1);
  expect(group.items[0].nodes.length).toBe(2);
  expect((group.items[0].nodes[0] as IntegerNode).text).toBe('123');
  expect((group.items[0].nodes[1] as IntegerNode).text).toBe('456');
});

test('single comma', () => {
  const text = '[,]';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse()[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(is(group.open, NodeType.OPEN)).toBe(true);
  expect(is(group.close, NodeType.CLOSE)).toBe(true);
  expect(group.items.length).toBe(0);
});

test('empty not closed', () => {
  const text = '[';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse()[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(is(group.open, NodeType.OPEN)).toBe(true);
  expect(group.close).toBe(null);
  expect(group.items.length).toBe(0);
});

test('inner group', () => {
  const text = '[()]';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse()[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.items.length).toBe(1);

  const innerGroup = group.items[0].nodes[0] as GroupNode;
  expect(is(innerGroup, NodeType.GROUP)).toBe(true);
  expect(innerGroup.items.length).toBe(0);
});

test('inner empty group', () => {
  const text = '[[[]]]';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse()[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.items.length).toBe(1);

  const innerGroup = group.items[0].nodes[0] as GroupNode;
  expect(is(innerGroup, NodeType.ARRAY)).toBe(true);
  expect(innerGroup.items.length).toBe(1);
  expect(innerGroup.items[0].nodes.length).toBe(1);

  const innerInnerGroup = innerGroup.items[0].nodes[0] as GroupNode;
  expect(is(innerInnerGroup, NodeType.ARRAY)).toBe(true);
  expect(innerInnerGroup.items.length).toBe(0);
});

test('two integers no comma and ws at the end', () => {
  const code = '[1, 2]';
  const source = Source.fromText(code);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse()[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.items.length).toBe(2);

  expect(group.items[0].nodes.length).toBe(1);
  expect((group.items[0].nodes[0] as IntegerNode).text).toBe('1');

  expect(group.items[1].nodes.length).toBe(1);
  expect((group.items[1].nodes[0] as IntegerNode).text).toBe('2');
});

test('two integers and comma no ws at the end', () => {
  const code = '[1, 2,]';
  const source = Source.fromText(code);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse()[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.items.length).toBe(2);

  expect(group.items[0].nodes.length).toBe(1);
  expect((group.items[0].nodes[0] as IntegerNode).text).toBe('1');

  expect(group.items[1].nodes.length).toBe(1);
  expect((group.items[1].nodes[0] as IntegerNode).text).toBe('2');
});

test('two integers and comma and ws', () => {
  const code = '[1, 2, ]';
  const source = Source.fromText(code);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse()[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.items.length).toBe(2);

  expect(group.items[0].nodes.length).toBe(1);
  expect((group.items[0].nodes[0] as IntegerNode).text).toBe('1');

  expect(group.items[1].nodes.length).toBe(1);
  expect((group.items[1].nodes[0] as IntegerNode).text).toBe('2');
});

test('array on several lines', () => {
  const code = `[1,
                2+2
                3,
     4,    6+6]`;
  const source = Source.fromText(code);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse()[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.items.length).toBe(4);

  expect(group.items[0].nodes.length).toBe(1);
  expect((group.items[0].nodes[0] as IntegerNode).text).toBe('1');

  expect(group.items[1].nodes.length).toBe(1);
  expect((group.items[1].nodes[0] as InfixNode).operator.text).toBe('+');
});

test('debug 1', () => {
  const code = '[1, , 2 ]';
  const source = Source.fromText(code);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse()[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.items.length).toBe(2);

  expect(group.items[0].nodes.length).toBe(1);
  expect((group.items[0].nodes[0] as IntegerNode).text).toBe('1');

  expect(group.items[1].nodes.length).toBe(1);
  expect((group.items[1].nodes[0] as IntegerNode).text).toBe('2');
});
