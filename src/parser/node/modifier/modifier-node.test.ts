import { LexicalNode } from '~/parser/node/lexical-node';
import { LexicalAnalysis } from '~/parser/parser';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';

test('infix modifier', () => {
  const text = 'infix';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.body().statements[0].nodes as LexicalNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.MODIFIER);
  expect(tokens[0].text).toBe('infix');
});

test('prefix operator', () => {
  const text = 'prefix +';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes as LexicalNode[];

  expect(nodes.length).toBe(2);
  expect(nodes[0].$).toBe(NodeType.MODIFIER);
  expect(nodes[0].text).toBe('prefix');
  expect(nodes[1].$).toBe(NodeType.ID);
  expect(nodes[1].text).toBe('+');
});
