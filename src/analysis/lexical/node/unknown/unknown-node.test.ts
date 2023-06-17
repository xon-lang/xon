import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { Source } from '~/source/source';

test('unknown 1', () => {
  const text = '123 §•∞•456';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].tokens as LexicalNode[];

  expect(nodes.length).toBe(7);
  expect(nodes[2].text).toBe('§');
});

test('unknown 2', () => {
  const text = 'ºª¶';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].tokens as LexicalNode[];

  expect(nodes.length).toBe(3);
  expect(nodes.map((x) => x.text).join('')).toBe('ºª¶');
});
