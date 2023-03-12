import { NodeType } from '~/node/node';
import { parseExpression } from '~/parser/parser';
import { Source } from '~/parser/source/source';

test('id', () => {
  const code = 'ºª¶';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.UNEXPECTED);
  expect(tree.text).toBe('ºª¶');
});
