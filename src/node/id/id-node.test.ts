import { NodeType } from '~/node/node';
import { parseExpression } from '~/parser/parser';

test('id', () => {
  const code = 'myVariable';
  const tree = parseExpression(code);

  expect(tree.nodeType).toBe(NodeType.ID);
  expect(tree.text).toBe('myVariable');
});
