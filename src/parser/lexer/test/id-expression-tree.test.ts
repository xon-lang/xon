import { NodeType } from '~/parser/lexer/node';
import { parseExpression } from '~/util/parse';

test('id', () => {
  const code = 'myVariable';
  const tree = parseExpression(code);

  expect(tree.nodeType).toBe(NodeType.ID);
  expect(tree.text).toBe('myVariable');
});
