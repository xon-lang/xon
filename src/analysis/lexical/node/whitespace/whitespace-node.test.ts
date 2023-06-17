import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType, Token } from '~/analysis/node';
import { Source } from '~/source/source';

test('whitespace', () => {
  const text = '    ';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].tokens as Token[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('    ');
  expect(nodes[0].$).toBe(NodeType.WHITESPACE);
});
