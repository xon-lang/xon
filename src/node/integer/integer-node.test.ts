import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';

test('zero int number', () => {
  const code = '0';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.INTEGER);
  expect(source.nodeText(tree)).toBe('0');
});

test('positive int number', () => {
  const code = '2x01110';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.INTEGER);
  expect(source.nodeText(tree)).toBe('2x01110');
});

test('radix int', () => {
  const code = '16x1a_b_c';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.INTEGER);
  expect(source.nodeText(tree)).toBe('16x1a_b_c');
});
