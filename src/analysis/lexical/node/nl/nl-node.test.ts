import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { NodeType } from '~/analysis/node';
import { Source } from '~/source/source';

test('line feed', () => {
  const text = '\n';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.nodes().statements[0].nodes as LexicalNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('\n');
  expect(nodes[0].$).toBe(NodeType.NL);
});

test('carriage return', () => {
  const text = '\r';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.nodes().statements[0].nodes as LexicalNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('\r');
  expect(nodes[0].$).toBe(NodeType.NL);
});

test('cr lf', () => {
  const text = '\r\n';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.nodes().statements[0].nodes as LexicalNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('\r\n');
  expect(nodes[0].$).toBe(NodeType.NL);
});

test('lf cr', () => {
  const text = '\n\r';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const statements = lexer.nodes().statements;

  expect(statements.length).toBe(2);
  expect(statements[0].nodes[0].$).toBe(NodeType.NL);
  expect((statements[0].nodes[0] as LexicalNode).text).toBe('\n');
  expect(statements[1].nodes[0].$).toBe(NodeType.NL);
  expect((statements[1].nodes[0] as LexicalNode).text).toBe('\r');
});

test('id', () => {
  const code = '\n';
  const source = Source.fromText(code);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.nodes().statements[0].nodes as LexicalNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.NL);
  expect(nodes[0].text).toBe('\n');
});
