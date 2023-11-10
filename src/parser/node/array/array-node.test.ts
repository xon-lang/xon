import { GroupNode } from '~/parser/node/group/group-node';
import { IntegerNode } from '~/parser/node/integer/integer-node';
import { WhitespaceNode } from '~/parser/node/whitespace/whitespace-node';
import { Parser } from '~/parser/parser';
import { is } from '~/parser/util/is';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

test('empty object', () => {
  const text = '{}';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse().statements[0];
  const tree = nodes[0];

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.OBJECT);
});

test('single item', () => {
  const text = '[123 456]';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse().statements[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.bodies.length).toBe(1);
  expect(group.bodies[0].statements.length).toBe(1);
  expect(group.bodies[0].statements[0].nodes.length).toBe(2);
  expect((group.bodies[0].statements[0].nodes[0] as IntegerNode).text).toBe('123');
  expect((group.bodies[0].statements[0].nodes[1] as IntegerNode).text).toBe('456');
});

test('single comma', () => {
  const text = '[,]';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse().statements[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(is(group.open, NodeType.OPEN)).toBe(true);
  expect(is(group.close, NodeType.CLOSE)).toBe(true);
  expect(group.bodies.length).toBe(2);
  expect(group.bodies[0].statements.length).toBe(1);
  expect(group.bodies[0].statements[0].nodes.length).toBe(0);
  expect(group.bodies[1].statements.length).toBe(1);
  expect(group.bodies[1].statements[0].nodes.length).toBe(0);
});

test('empty not closed', () => {
  const text = '[';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse().statements[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(is(group.open, NodeType.OPEN)).toBe(true);
  expect(group.close).toBe(null);
  expect(group.bodies.length).toBe(1);
  expect(group.bodies[0].statements.length).toBe(1);
  expect(group.bodies[0].statements[0].nodes.length).toBe(0);
});

test('inner group', () => {
  const text = '[()]';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse().statements[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.bodies.length).toBe(1);

  const innerGroup = group.bodies[0].statements[0].nodes[0] as GroupNode;
  expect(is(innerGroup, NodeType.GROUP)).toBe(true);
  expect(innerGroup.bodies.length).toBe(1);
  expect(innerGroup.bodies[0].statements.length).toBe(1);
  expect(innerGroup.bodies[0].statements[0].nodes.length).toBe(0);
});

test('inner empty group', () => {
  const text = '[[[]]]';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse().statements[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.bodies.length).toBe(1);

  const innerGroup = group.bodies[0].statements[0].nodes[0] as GroupNode;
  expect(is(innerGroup, NodeType.ARRAY)).toBe(true);
  expect(innerGroup.bodies.length).toBe(1);
  expect(innerGroup.bodies[0].statements.length).toBe(1);
  expect(innerGroup.bodies[0].statements[0].nodes.length).toBe(1);

  const innerInnerGroup = innerGroup.bodies[0].statements[0].nodes[0] as GroupNode;
  expect(is(innerInnerGroup, NodeType.ARRAY)).toBe(true);
  expect(innerInnerGroup.bodies.length).toBe(1);
  expect(innerInnerGroup.bodies[0].statements.length).toBe(1);
  expect(innerInnerGroup.bodies[0].statements[0].nodes.length).toBe(0);
});

test('two integers no comma and ws at the end', () => {
  const code = '[1, 2]';
  const source = Source.fromText(code);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse().statements[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.bodies.length).toBe(2);

  expect(group.bodies[0].statements.length).toBe(1);
  expect(group.bodies[0].statements[0].nodes.length).toBe(1);
  expect((group.bodies[0].statements[0].nodes[0] as IntegerNode).text).toBe('1');

  expect(group.bodies[1].statements.length).toBe(1);
  expect(group.bodies[1].statements[0].nodes.length).toBe(1);
  expect((group.bodies[1].statements[0].nodes[0] as IntegerNode).text).toBe('2');
});

test('two integers and comma no ws at the end', () => {
  const code = '[1, 2,]';
  const source = Source.fromText(code);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse().statements[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.bodies.length).toBe(3);

  expect(group.bodies[0].statements.length).toBe(1);
  expect(group.bodies[0].statements[0].nodes.length).toBe(1);
  expect((group.bodies[0].statements[0].nodes[0] as IntegerNode).text).toBe('1');

  expect(group.bodies[1].statements.length).toBe(1);
  expect(group.bodies[1].statements[0].nodes.length).toBe(1);
  expect((group.bodies[1].statements[0].nodes[0] as IntegerNode).text).toBe('2');

  expect(group.bodies[2].statements.length).toBe(1);
  expect(group.bodies[2].statements[0].nodes.length).toBe(0);
});

test('two integers and comma and ws', () => {
  const code = '[1, 2, ]';
  const source = Source.fromText(code);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse().statements[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.bodies.length).toBe(3);

  expect(group.bodies[0].statements.length).toBe(1);
  expect(group.bodies[0].statements[0].nodes.length).toBe(1);
  expect((group.bodies[0].statements[0].nodes[0] as IntegerNode).text).toBe('1');

  expect(group.bodies[1].statements.length).toBe(1);
  expect(group.bodies[1].statements[0].nodes.length).toBe(1);
  expect((group.bodies[1].statements[0].nodes[0] as IntegerNode).text).toBe('2');

  expect(group.bodies[2].statements.length).toBe(1);
  expect(group.bodies[2].statements[0].nodes.length).toBe(0);
});

test('array on several lines', () => {
  const code = `[1,
                2+2
                3,
     4,    6+6]`;
  const source = Source.fromText(code);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse().statements[0];

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.ARRAY)).toBe(true);
  expect(group.bodies.length).toBe(4);

  expect(group.bodies[0].statements.length).toBe(1);
  expect(group.bodies[0].statements[0].nodes.length).toBe(1);
  expect((group.bodies[0].statements[0].nodes[0] as IntegerNode).text).toBe('1');

  expect(group.bodies[1].statements.length).toBe(3);
  expect(group.bodies[1].statements[0].nodes.length).toBe(0);
  expect(group.bodies[1].statements[1].nodes.length).toBe(1);
});
