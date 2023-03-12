import { NodeType } from '~/parser/lexer/node';
import { parseExpression } from '~/util/parse';

test('id', () => {
  const code = 'ºª¶';
  const tree = parseExpression(code);

  expect(tree.nodeType).toBe(NodeType.UNEXPECTED);
  expect(tree.text).toBe('ºª¶');
});
