import { NodeType } from '~/node/node';
import { parseExpression } from '~/parser/parser';
import { Source } from '~/parser/source/source';

test('zero int number', () => {
  const code = '0';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.nodeType).toBe(NodeType.INTEGER);
  expect(tree.text).toBe('0');
});

test('positive int number', () => {
  const code = '2x01110';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.nodeType).toBe(NodeType.INTEGER);
  expect(tree.text).toBe('2x01110');
});

test('radix int', () => {
  const code = '16x1a_b_c';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.nodeType).toBe(NodeType.INTEGER);
  expect(tree.text).toBe('16x1a_b_c');
});
