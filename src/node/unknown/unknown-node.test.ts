import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';
import { UnknownNode } from '~/node/unknown/unknown-node';

test('id', () => {
  const code = 'ºª¶';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as UnknownNode;

  expect(tree.type).toBe(NodeType.UNKNOWN);
  expect(tree.text).toBe(code);
});
