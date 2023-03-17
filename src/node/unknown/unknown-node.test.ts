import { parseExpression } from '~/compiler/parser/parser';
import { NodeType } from '~/node/node';
import { UnknownNode } from '~/node/unknown/unknown-node';
import { Source } from '~/source/source';

test('id', () => {
  const code = 'ºª¶';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as UnknownNode;

  expect(tree.type).toBe(NodeType.UNKNOWN);
  expect(tree.text).toBe(code);
});
