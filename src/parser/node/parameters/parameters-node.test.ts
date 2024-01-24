import { IdNode } from '../../../parser/node/id/id-node';
import { NodeType } from '../../../parser/node/node-type';
import { parse } from '../../../parser/parser';
import { PrefixNode } from '../prefix/prefix-node';

test('a', () => {
  const text = 'model Abstract';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as PrefixNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.PREFIX);
  expect(tree.operator?.text).toBe('model');
  expect((tree.value as IdNode)?.text).toBe('Abstract');
});
