import { LexicalAnalysis } from '~/node/lexical/lexical-analysis';
import { LexicalNode, NonHiddenLexicalNode } from '~/node/lexical/lexical-node';
import { Source } from '~/source/source';

test('unknown 1', () => {
  const text = '123 §•∞•456';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes as NonHiddenLexicalNode[];

  expect(nodes.length).toBe(6);
  expect(nodes[1].text).toBe('§');
  expect(nodes[1].hidden.length).toBe(1);
  expect(nodes[1].hidden[0].text).toBe(' ');
});

test('unknown 2', () => {
  const text = 'ºª¶';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes as LexicalNode[];

  expect(nodes.length).toBe(3);
  expect(nodes.map((x) => x.text).join('')).toBe('ºª¶');
});
