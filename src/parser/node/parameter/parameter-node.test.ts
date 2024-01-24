import { IdNode } from '../../../parser/node/id/id-node';
import { NodeType } from '../../../parser/node/node-type';
import { parse } from '../../../parser/parser';
import { PrefixNode } from '../prefix/prefix-node';

test('a', () => {
  const text = 'model Abstract';
  const nodes = parse(text).root.children;
  const node = nodes[0] as PrefixNode;

  expect(nodes.length).toBe(1);

  expect(node.$).toBe(NodeType.PREFIX);
  expect(node.operator?.text).toBe('model');
  expect((node.value as IdNode)?.text).toBe('Abstract');
});
