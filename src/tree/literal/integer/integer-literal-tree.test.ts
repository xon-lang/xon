import { parseLiteral } from '../../util/parse';
import { IntegerLiteralTree } from './integer-literal-tree';

test('zero int number', () => {
  const code = '0';
  const tree = parseLiteral(code) as IntegerLiteralTree;
  expect(tree).toBeInstanceOf(IntegerLiteralTree);

  expect(tree.value).toBe(0);
});

test('positive int number', () => {
  const code = '2x01110';
  const tree = parseLiteral(code) as IntegerLiteralTree;
  expect(tree).toBeInstanceOf(IntegerLiteralTree);

  expect(tree.value).toBe(0b01110);
});

test('radix int', () => {
  const code = '16x1a_b_c';
  const tree = parseLiteral(code) as IntegerLiteralTree;
  expect(tree).toBeInstanceOf(IntegerLiteralTree);

  expect(tree.integer).toBe('1a_b_c');
  expect(tree.value).toBe(0x1abc);
});
