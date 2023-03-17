import { parseExpression } from '~/analysis/syntax/syntax-analysis';
import { IdNode } from '~/node/id/id-node';
import { LadderNode } from '~/node/ladder/ladder-node';
import { NodeType } from '~/node/node';
import { Source } from '~/source/source';

test('single expression', () => {
  const code = 'abc\n  a = 1';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as LadderNode;

  expect(tree.type).toBe(NodeType.LADDER);
  expect(tree.header.type).toBe(NodeType.ID);
  expect((tree.header as IdNode).text).toBe('abc');
  expect(tree.body.nodes.length).toBe(1);
});
