import { LexicalAnalysis } from '~/node/lexical/lexical-analysis';
import { LexicalNode } from '~/node/lexical/lexical-node';
import { NodeType } from '~/node/node';
import { parseTypeNode } from '~/node/semantic/type/type-node';
import { UnionTypeNode } from '~/node/semantic/type/union/union-type-node';
import { Source } from '~/source/source';

test('two union type node', () => {
  const text = "'abc' | 123";
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const [node] = lexer.body().statements[0].nodes as LexicalNode[];
  const type = parseTypeNode(node) as UnionTypeNode;

  expect(type).toBeTruthy();
  expect(type.$).toBe(NodeType.TYPE_UNION);
  expect(type.types.length).toBe(2);
});
