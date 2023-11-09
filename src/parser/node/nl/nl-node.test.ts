import { LexicalAnalysis } from '~/parser/parser';
import { Source } from '~/source/source';
import { LexicalNode } from '../node';
import { NodeType } from '../node-type';

test('line feed', () => {
  const text = '\n';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].hidden ?? [];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('\n');
  expect(nodes[0].$).toBe(NodeType.NL);
});

test('carriage return', () => {
  const text = '\r';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].hidden ?? [];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('\r');
  expect(nodes[0].$).toBe(NodeType.NL);
});

test('cr lf', () => {
  const text = '\r\n';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].hidden ?? [];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('\r\n');
  expect(nodes[0].$).toBe(NodeType.NL);
});

test('lf cr', () => {
  const text = '\n\r';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const { statements } = lexer.body();

  expect(statements.length).toBe(3);
  expect(statements[0].hidden?.first().$).toBe(NodeType.NL);
  expect(statements[0].hidden?.first()?.text).toBe('\n');

  expect(statements[1].hidden?.first().$).toBe(NodeType.NL);
  expect(statements[1].hidden?.first()?.text).toBe('\r');

  expect(statements[2].hidden.length).toBe(0);
});

test('several', () => {
  const code = '  \n    \r\nabc';
  const source = Source.fromText(code);
  const lexer = new LexicalAnalysis(source.text);
  const { statements } = lexer.body();

  expect(statements.length).toBe(3);
  expect(statements[0].hidden?.length).toBe(2);
  expect(statements[0].hidden?.at(1)?.$).toBe(NodeType.NL);
  expect(statements[0].hidden?.at(1)?.text).toBe('\n');
  expect(statements[1].hidden?.length).toBe(2);
  expect(statements[1].hidden?.at(1)?.$).toBe(NodeType.NL);
  expect(statements[1].hidden?.at(1)?.text).toBe('\r\n');
  expect(statements[2].hidden?.length).toBe(0);
  expect((statements[2].nodes[0] as LexicalNode).text).toBe('abc');
});
