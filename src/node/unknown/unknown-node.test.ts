import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType } from '~/analysis/node';
import { parseExpression } from '~/analysis/syntax/syntax-analysis';
import { UnknownNode } from '~/node/unknown/unknown-node';
import { Source } from '~/source/source';

test('unexpected 1', () => {
  const text = '123 §•∞•456';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(4);
  expect(tokens[2].text).toBe('§•∞•');
});

test('unexpected 2', () => {
  const text = "'abc";
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe("'abc");
  expect(tokens[0].type).toBe(NodeType.UNKNOWN);
});

test('id', () => {
  const code = 'ºª¶';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as UnknownNode;

  expect(tree.type).toBe(NodeType.UNKNOWN);
  expect(tree.text).toBe(code);
});
