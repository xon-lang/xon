import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';

test('id', () => {
  const code = 'ºª¶';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.UNEXPECTED);
  expect(source.nodeText(tree)).toBe('ºª¶');
});
