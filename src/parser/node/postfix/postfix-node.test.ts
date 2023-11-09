import { PostfixNode } from '~/parser/node/postfix/postfix-node';
import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { evaluate } from '~/util/evaluate';
import { NodeType } from '../node-type';

test('after integer', () => {
  const text = '1!';
  const source = Source.fromText(text);
  const lexer = new Parser(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const node = nodes[0] as PostfixNode;

  expect(node.$).toBe(NodeType.POSTFIX);
  expect(node.operator.text).toBe('!');
  expect(evaluate(node.value)).toBe(1);
});
