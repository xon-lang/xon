import { PostfixNode } from '../../../parser/node/postfix/postfix-node';
import { parse } from '../../../parser/parser';
import { evaluate } from '../../../util/evaluate';
import { $Node } from '../node-type';

test('after integer', () => {
  const text = '1!';
  const nodes = parse(text).root.children;
  const node = nodes[0] as PostfixNode;

  expect(node.$).toBe($Node.POSTFIX);
  expect(node.operator.text).toBe('!');
  expect(evaluate(node.value)).toBe(1);
});
