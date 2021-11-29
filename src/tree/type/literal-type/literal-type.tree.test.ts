import { parseType } from '../../parse';
import { LiteralTypeTree } from './literal-type.tree';

test('integer', () => {
  const code = '123';
  const tree = parseType<LiteralTypeTree>(code);
  expect(tree).toBeInstanceOf(LiteralTypeTree);

  expect(tree.literal.value).toBe('123');
});

test('string', () => {
  const code = '"hi"';
  const tree = parseType<LiteralTypeTree>(code);
  expect(tree).toBeInstanceOf(LiteralTypeTree);

  expect(tree.literal.value).toBe('"hi"');
});
