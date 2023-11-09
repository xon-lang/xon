import { NodeType } from '~/parser/lexical/node';
import { PostfixNode } from '~/parser/lexical/postfix/postfix-node';
import { LexicalAnalysis } from '~/parser/parser';
import { Source } from '~/source/source';
import { evaluate } from '~/util/evaluate';

test('after integer', () => {
  const text = '1!';
  const source = Source.fromText(text);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const node = nodes[0] as PostfixNode;

  expect(node.$).toBe(NodeType.POSTFIX);
  expect(node.operator.text).toBe('!');
  expect(evaluate(node.value)).toBe(1);
});
