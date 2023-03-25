import { is } from '~/analysis/is';
import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { GroupNode } from '~/analysis/lexical/node/group/group-node';
import { IntegerNode } from '~/analysis/lexical/node/integer/integer-node';
import { WhitespaceNode } from '~/analysis/lexical/node/whitespace/whitespace-node';
import { NodeType } from '~/analysis/node';
import { Source } from '~/source/source';

test('empty', () => {
  const text = '[]';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.nodes().statements[0].nodes;

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.GROUP)).toBe(true);
  expect(group.items.length).toBe(0);
});

test('single item', () => {
  const text = '[123 456]';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.nodes().statements[0].nodes;

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.GROUP)).toBe(true);
  expect(group.items.length).toBe(3);
  expect((group.items[0] as IntegerNode).text).toBe('123');
  expect((group.items[1] as WhitespaceNode).text).toBe(' ');
  expect((group.items[2] as IntegerNode).text).toBe('456');
});

test('inner group', () => {
  const text = '[()]';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.nodes().statements[0].nodes;

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.GROUP)).toBe(true);
  expect(group.items.length).toBe(1);
  expect((group.items[0] as GroupNode).items.length).toBe(0);
});
