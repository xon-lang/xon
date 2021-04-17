import { parseType } from '../../parse';
import { LiteralTypeTree } from './literal-type.tree';

test('has null value', () => {
  const code = 'null';
  const tree = parseType<LiteralTypeTree>(code);
  expect(tree).toBeInstanceOf(LiteralTypeTree);

  expect(tree.toString()).toBe('null');
});

test('has string value', () => {
  const code = '"hi"';
  const tree = parseType<LiteralTypeTree>(code);
  expect(tree).toBeInstanceOf(LiteralTypeTree);

  expect(tree.toString()).toBe('"hi"');
});
