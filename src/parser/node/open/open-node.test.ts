import { GroupNode } from '../../../parser/node/group/group-node';
import { parse } from '../../../parser/parser';
import { NodeType } from '../node-type';

test('open paren', () => {
  const text = '(';
  const nodes = parse(text).root.children;

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.GROUP);
  expect((nodes[0] as GroupNode).open.$).toBe(NodeType.OPEN);
  expect((nodes[0] as GroupNode).open.text).toBe('(');
  expect((nodes[0] as GroupNode).close).toBe(null);
});

test('open bracket', () => {
  const text = '[';
  const nodes = parse(text).root.children;

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.ARRAY);
  expect((nodes[0] as GroupNode).open.$).toBe(NodeType.OPEN);
  expect((nodes[0] as GroupNode).open.text).toBe('[');
  expect((nodes[0] as GroupNode).close).toBe(null);
});

test('open brace', () => {
  const text = '{';
  const nodes = parse(text).root.children;

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.OBJECT);
  expect((nodes[0] as GroupNode).open.$).toBe(NodeType.OPEN);
  expect((nodes[0] as GroupNode).open.text).toBe('{');
  expect((nodes[0] as GroupNode).close).toBe(null);
});
