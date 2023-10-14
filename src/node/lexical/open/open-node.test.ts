import { LexicalAnalysis } from '~/node/lexical/lexical-analysis';
import { NodeType } from '~/node/node';
import { GroupNode } from '~/node/syntactic/group/group-node';
import { Source } from '~/source/source';

test('open paren', () => {
  const code = '(';
  const source = Source.fromText(code);
  const lexer = new LexicalAnalysis(source.text);
  const { nodes } = lexer.body().statements[0];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.GROUP);
  expect((nodes[0] as GroupNode).open.$).toBe(NodeType.OPEN);
  expect((nodes[0] as GroupNode).open.text).toBe('(');
  expect((nodes[0] as GroupNode).close).toBe(null);
});

test('open bracket', () => {
  const code = '[';
  const source = Source.fromText(code);
  const lexer = new LexicalAnalysis(source.text);
  const { nodes } = lexer.body().statements[0];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.GROUP);
  expect((nodes[0] as GroupNode).open.$).toBe(NodeType.OPEN);
  expect((nodes[0] as GroupNode).open.text).toBe('[');
  expect((nodes[0] as GroupNode).close).toBe(null);
});

test('open brace', () => {
  const code = '{';
  const source = Source.fromText(code);
  const lexer = new LexicalAnalysis(source.text);
  const { nodes } = lexer.body().statements[0];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.GROUP);
  expect((nodes[0] as GroupNode).open.$).toBe(NodeType.OPEN);
  expect((nodes[0] as GroupNode).open.text).toBe('{');
  expect((nodes[0] as GroupNode).close).toBe(null);
});
