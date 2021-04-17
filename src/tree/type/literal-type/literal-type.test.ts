import { parseType } from '../../parse';
import { LiteralTypeTree } from './literal-type.tree';

test('number return function', () => {
  const code = 'null';
  const tree = parseType<LiteralTypeTree>(code);
  expect(tree).toBeInstanceOf(LiteralTypeTree);

  expect(tree.value).toBe(null);
});
