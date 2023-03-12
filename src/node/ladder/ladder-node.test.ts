import { LadderNode } from '~/node/ladder/ladder-node';
import { NodeType } from '~/node/node';
import { parseExpression } from '~/parser/parser';
import { Source } from '~/parser/source/source';

test('single expression', () => {
  const code = 'abc\n  a = 1';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as LadderNode;

  expect(tree.type).toBe(NodeType.LADDER);
  expect(tree.header.type).toBe(NodeType.ID);
  expect(source.nodeText(tree.header)).toBe('abc');
  expect(tree.body.source.nodes.length).toBe(1);
});
