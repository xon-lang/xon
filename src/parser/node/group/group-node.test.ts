import { GroupNode } from '~/parser/node/group/group-node';
import { Parser } from '~/parser/parser';
import { is } from '~/parser/util/is';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';

test('empty closed', () => {
  const text = '()';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse()[0].nodes;

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.GROUP)).toBe(true);
  expect(is(group.open, NodeType.OPEN)).toBe(true);
  expect(is(group.close, NodeType.CLOSE)).toBe(true);
  expect(group.items.length).toBe(0);
});
