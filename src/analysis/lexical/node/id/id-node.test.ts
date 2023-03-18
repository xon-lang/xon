import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { NodeType } from '~/analysis/node';
import { syntaxNode } from '~/analysis/syntax/syntax-analysis';
import { Source } from '~/source/source';

test('id', () => {
  const code = 'myVariable';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as IdNode;

  expect(tree.$).toBe(NodeType.ID);
  expect(tree.text).toBe('myVariable');
});

test('single id', () => {
  const text = 'abc';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].$).toBe(NodeType.ID);
});

test('several id', () => {
  const text = 'abc edf_    _ghi1_23';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(5);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].$).toBe(NodeType.ID);
  expect(tokens[1].text).toBe(' ');
  expect(tokens[1].$).toBe(NodeType.WHITESPACE);
  expect(tokens[2].text).toBe('edf_');
  expect(tokens[2].$).toBe(NodeType.ID);
  expect(tokens[3].text).toBe('    ');
  expect(tokens[3].$).toBe(NodeType.WHITESPACE);
  expect(tokens[4].text).toBe('_ghi1_23');
  expect(tokens[4].$).toBe(NodeType.ID);
});
