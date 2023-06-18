import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType, Token } from '~/analysis/node';
import { Source } from '~/source/source';

test('line feed', () => {
  const text = '\n';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes as Token[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('\n');
  expect(nodes[0].$).toBe(NodeType.NL);
});

test('carriage return', () => {
  const text = '\r';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes as Token[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('\r');
  expect(nodes[0].$).toBe(NodeType.NL);
});

test('cr lf', () => {
  const text = '\r\n';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes as Token[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('\r\n');
  expect(nodes[0].$).toBe(NodeType.NL);
});

test('lf cr', () => {
  const text = '\n\r';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const { statements } = lexer.body();

  expect(statements.length).toBe(2);
  expect(statements[0].nodes[0].$).toBe(NodeType.NL);
  expect((statements[0].nodes[0] as Token).text).toBe('\n');
  expect(statements[1].nodes[0].$).toBe(NodeType.NL);
  expect((statements[1].nodes[0] as Token).text).toBe('\r');
});

test('several', () => {
  const code = '  \n    \r\nabc';
  const source = Source.fromText(code);
  const lexer = new LexicalAnalysis(source.text);
  const { statements } = lexer.body();

  expect(statements.length).toBe(3);
  expect(statements[0].nodes.length).toBe(2);
  expect(statements[0].nodes[1].$).toBe(NodeType.NL);
  expect(statements[0].nodes[1].text).toBe('\n');
  expect(statements[1].nodes.length).toBe(2);
  expect(statements[1].nodes[1].$).toBe(NodeType.NL);
  expect(statements[1].nodes[1].text).toBe('\r\n');
  expect(statements[2].nodes.length).toBe(1);
  expect(statements[2].nodes[0].$).toBe(NodeType.ID);
  expect(statements[2].nodes[0].text).toBe('abc');
});
