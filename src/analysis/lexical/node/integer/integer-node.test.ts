import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { IntegerNode } from '~/analysis/lexical/node/integer/integer-node';
import { NodeType } from '~/analysis/node';
import { syntaxNode } from '~/analysis/syntax/syntax-analysis';
import { Source } from '~/source/source';

test('integer', () => {
  const text = '123';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('123');
  expect(tokens[0].type).toBe(NodeType.INTEGER);
});

test('zero int number', () => {
  const code = '0';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as IntegerNode;

  expect(tree.type).toBe(NodeType.INTEGER);
  expect(tree.text).toBe('0');
});

test('positive int number', () => {
  const code = '2x01110';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as IntegerNode;

  expect(tree.type).toBe(NodeType.INTEGER);
  expect(tree.text).toBe('2x01110');
});

test('radix int', () => {
  const code = '16x1a_b_c';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as IntegerNode;

  expect(tree.type).toBe(NodeType.INTEGER);
  expect(tree.text).toBe('16x1a_b_c');
});
