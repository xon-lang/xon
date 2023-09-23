import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType } from '~/analysis/node';
import { ModifierIdNode } from '~/node/modifier-id/modifier-id-node';
import { Source } from '~/source/source';

test('prefix modifier', () => {
  const text = 'prefix +';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const tree = nodes[0] as ModifierIdNode;

  expect(nodes.length).toBe(1);
  expect(tree.$).toBe(NodeType.MODIFIER_ID);
  expect(tree.modifier.text).toBe('prefix');
  expect(tree.id.text).toBe('+');
});
