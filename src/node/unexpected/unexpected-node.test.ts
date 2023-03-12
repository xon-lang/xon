import { NodeType } from '~/node/node';
import { parseExpression } from '~/parser/parser';

test('id', () => {
  const code = 'ºª¶';
  const tree = parseExpression(code);

  expect(tree.nodeType).toBe(NodeType.UNEXPECTED);
  expect(tree.text).toBe('ºª¶');
});
