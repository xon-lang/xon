import { parseSyntax } from '../../../syntax';
import { $Node } from '../../node';
import { GroupNode } from '../../syntax/group/group-node';

test('open paren', () => {
  const text = '(';
  const nodes = parseSyntax(text).statements.map((x) => x.item);

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe($Node.GROUP);
  expect((nodes[0] as GroupNode).open.$).toBe($Node.OPEN);
  expect((nodes[0] as GroupNode).open.text).toBe('(');
  expect((nodes[0] as GroupNode).close).toBe(null);
});

test('open bracket', () => {
  const text = '[';
  const nodes = parseSyntax(text).statements.map((x) => x.item);

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe($Node.ARRAY);
  expect((nodes[0] as GroupNode).open.$).toBe($Node.OPEN);
  expect((nodes[0] as GroupNode).open.text).toBe('[');
  expect((nodes[0] as GroupNode).close).toBe(null);
});

test('open brace', () => {
  const text = '{';
  const nodes = parseSyntax(text).statements.map((x) => x.item);

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe($Node.OBJECT);
  expect((nodes[0] as GroupNode).open.$).toBe($Node.OPEN);
  expect((nodes[0] as GroupNode).open.text).toBe('{');
  expect((nodes[0] as GroupNode).close).toBe(null);
});
