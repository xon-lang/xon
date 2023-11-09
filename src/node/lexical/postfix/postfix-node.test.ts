import { LexicalAnalysis } from '~/node/lexical/lexical-analysis';
import { PostfixNode } from '~/node/lexical/postfix/postfix-node';
import { NodeType } from '~/node/node';
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
