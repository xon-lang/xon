import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { NodeType } from '~/analysis/node';
import { Source } from '~/source/source';

test('whitespace', () => {
  const text = '    ';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.nodes().statements[0].nodes as LexicalNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('    ');
  expect(nodes[0].$).toBe(NodeType.WHITESPACE);
});
