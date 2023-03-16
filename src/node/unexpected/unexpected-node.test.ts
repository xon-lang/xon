import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';
import { UnexpectedNode } from '~/node/unexpected/unexpected-node';

test('id', () => {
  const code = 'ºª¶';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as UnexpectedNode;

  expect(tree.type).toBe(NodeType.UNEXPECTED);
  expect(tree.text).toBe(code);
});
