import { parseBody } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { BodyNode } from '~/node/body/body-node';
import { InfixNode } from '~/node/infix/infix-node';
import { LadderNode } from '~/node/ladder/ladder-node';
import { NodeType } from '~/node/node';

test('debug', () => {
  const code = 'a = 1\n b = 2\n +b';
  const source = Source.fromText(code);
  const tree = parseBody(source) as BodyNode;

  expect(tree.type).toBe(NodeType.BODY);
  expect(tree.nodes.length).toBe(1);
  expect(tree.nodes[0].type).toBe(NodeType.LADDER);
  expect((tree.nodes[0] as LadderNode).body.nodes.length).toBe(2);
  expect((tree.nodes[0] as LadderNode).body.nodes[0].type).toBe(NodeType.INFIX);
  expect((tree.nodes[0] as LadderNode).body.nodes[1].type).toBe(NodeType.PREFIX);
});

test('debug 2', () => {
  const code = 'a = 1\nb = 2';
  const source = Source.fromText(code);
  const tree = parseBody(source) as BodyNode;

  expect(tree.type).toBe(NodeType.BODY);
  expect(tree.nodes.length).toBe(2);
});

test('debug 3', () => {
  const code = 'a = 1\n b = 2\nc = 3';
  const source = Source.fromText(code);
  const tree = parseBody(source) as BodyNode;

  expect(tree.type).toBe(NodeType.BODY);
  expect(tree.nodes.length).toBe(2);
  expect(tree.nodes[0].type).toBe(NodeType.LADDER);
  expect(tree.nodes[1].type).toBe(NodeType.INFIX);
});

test('single expression', () => {
  const code = '\n  a = 1';
  const source = Source.fromText(code);
  const tree = parseBody(source) as BodyNode;

  expect(tree.type).toBe(NodeType.BODY);
  const infix = tree.nodes[0] as InfixNode;
  expect(source.nodeText(infix.left)).toBe('a');
  expect(source.nodeText(infix.operator)).toBe('=');
  expect(source.nodeText(infix.right)).toBe('1');
});

test('multiple expression', () => {
  const code = '\n  x = 1\n  y = 2\n  z = 3';
  const source = Source.fromText(code);
  const tree = parseBody(source) as BodyNode;

  expect(tree.type).toBe(NodeType.BODY);
  expect(tree.nodes.length).toBe(3);
});
