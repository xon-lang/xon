import { NodeType } from '~/node/node';
import { parseExpression } from '~/parser/parser';

test('zero int number', () => {
  const code = '0';
  const tree = parseExpression(code);

  expect(tree.nodeType).toBe(NodeType.INTEGER);
  expect(tree.text).toBe('0');
});

test('positive int number', () => {
  const code = '2x01110';
  const tree = parseExpression(code);

  expect(tree.nodeType).toBe(NodeType.INTEGER);
  expect(tree.text).toBe('2x01110');
});

test('radix int', () => {
  const code = '16x1a_b_c';
  const tree = parseExpression(code);

  expect(tree.nodeType).toBe(NodeType.INTEGER);
  expect(tree.text).toBe('16x1a_b_c');
});
