import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { IdNode } from '~/node/id/id-node';
import { LadderNode } from '~/node/ladder/ladder-node';
import { NodeType } from '~/node/node';

test('single expression', () => {
  const code = 'abc\n  a = 1';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as LadderNode;

  expect(tree.type).toBe(NodeType.LADDER);
  expect(tree.header.type).toBe(NodeType.ID);
  expect((tree.header as IdNode).text).toBe('abc');
  expect(tree.body.nodes.length).toBe(1);
});
