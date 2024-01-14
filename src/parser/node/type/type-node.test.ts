import { IdNode } from '../../../parser/node/id/id-node';
import { NodeType } from '../../../parser/node/node-type';
import { parse } from '../../../parser/parser';
import { TypeNode } from './type-node';

test('a', () => {
  const text = ': Abstract';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as TypeNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.TYPE);
  expect(tree.operator.text).toBe(':');
  expect((tree.value as IdNode)?.text).toBe('Abstract');
});
