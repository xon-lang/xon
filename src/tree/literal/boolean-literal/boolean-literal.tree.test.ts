import { parseLiteral } from '../../parse';
import { BooleanLiteralTree } from './boolean-literal.tree';

test('check true', () => {
  const code = 'true';
  const tree = parseLiteral<BooleanLiteralTree>(code);
  expect(tree).toBeInstanceOf(BooleanLiteralTree);

  expect(tree.value).toBe(true);
});

test('check false', () => {
  const code = 'false';
  const tree = parseLiteral<BooleanLiteralTree>(code);
  expect(tree).toBeInstanceOf(BooleanLiteralTree);

  expect(tree.value).toBe(false);
});
