import { LexicalAnalysis } from '~/node/lexical/lexical-analysis';
import { LexicalNode } from '~/node/lexical/lexical-node';
import { NodeType } from '~/node/node';
import { IntegerTypeNode } from '~/node/semantic/type/integer/integer-type-node';
import { StringTypeNode } from '~/node/semantic/type/string/string-type-node';
import { parseTypeNode } from '~/node/semantic/type/type-node';
import { UnionTypeNode } from '~/node/semantic/type/union/union-type-node';
import { Source } from '~/source/source';

test('two union type node', () => {
  const text = '\'abc\' | 123';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const [node] = lexer.body().statements[0].nodes as LexicalNode[];
  const type = parseTypeNode(node) as UnionTypeNode;

  expect(type).toBeTruthy();
  expect(type.$).toBe(NodeType.TYPE_UNION);
  expect(type.types.length).toBe(2);
  expect((type.types[0] as StringTypeNode).value).toBe('abc');
  expect((type.types[1] as IntegerTypeNode).value).toBe(123);
});

test('four union type node', () => {
  const text = '\'abc\' | 123 | 1 | \'def\'';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const [node] = lexer.body().statements[0].nodes as LexicalNode[];
  const type = parseTypeNode(node) as UnionTypeNode;

  expect(type).toBeTruthy();
  expect(type.$).toBe(NodeType.TYPE_UNION);
  expect(type.types.length).toBe(4);
  expect((type.types[3] as StringTypeNode).value).toBe('def');
});
