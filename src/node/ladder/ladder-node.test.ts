import { LadderNode } from '~/node/ladder/ladder-node';
import { NodeType } from '~/node/node';
import { parseExpression } from '~/parser/parser';
import { Source } from '~/parser/source/source';

test('single expression', () => {
  const code = 'abc\n  a = 1';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as LadderNode;

  expect(tree.nodeType).toBe(NodeType.LADDER);
  expect(tree.header.nodeType).toBe(NodeType.ID);
  expect(tree.header.text).toBe('abc');
  expect(tree.body.source.nodes.length).toBe(1);
});
