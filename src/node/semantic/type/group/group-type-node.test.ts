import { LexicalAnalysis } from '~/node/lexical/lexical-analysis';
import { LexicalNode } from '~/node/lexical/lexical-node';
import { NodeType } from '~/node/node';
import { IntegerTypeNode } from '~/node/semantic/type/integer/integer-type-node';
import { parseTypeNode } from '~/node/semantic/type/type-node';
import { Source } from '~/source/source';

test('group type node', () => {
  const text = '(123)';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const [node] = lexer.body().statements[0].nodes as LexicalNode[];
  const type = parseTypeNode(node) as IntegerTypeNode;

  expect(type).toBeTruthy();
  expect(type.$).toBe(NodeType.TYPE_INTEGER);
  expect(type.value).toBe(123);
});
