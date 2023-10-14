import { LexicalAnalysis } from '~/node/lexical/lexical-analysis';
import { LexicalNode } from '~/node/lexical/lexical-node';
import { NodeType } from '~/node/node';
import { StringTypeNode } from '~/node/semantic/type/string/string-type-node';
import { parseTypeNode } from '~/node/semantic/type/type-node';
import { Source } from '~/source/source';

test('string type node', () => {
  const text = '123';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const [node] = lexer.body().statements[0].nodes as LexicalNode[];
  const type = parseTypeNode(node) as StringTypeNode;

  expect(type).toBeTruthy();
  expect(type.$).toBe(NodeType.TYPE_INTEGER);
  expect(type.value).toBe(123);
});
