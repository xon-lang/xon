import { NodeType } from '~/analysis/node';
import { PostfixNode } from '~/analysis/syntax/node/postfix/postfix-node';
import { parseExpression } from '~/analysis/syntax/syntax-analysis';
import { Source } from '~/source/source';
import { evaluate } from '~/util/evaluate';

test('after integer', () => {
  const code = '1!';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as PostfixNode;

  expect(tree.type).toBe(NodeType.POSTFIX);
  expect(tree.operator.text).toBe('!');
  expect(evaluate(source, tree.value)).toBe(1);
});

test('after invoke', () => {
  const code = 'ctx.parameters[]!';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as PostfixNode;

  expect(tree.type).toBe(NodeType.POSTFIX);
  expect(tree.operator.text).toBe('!');
});
