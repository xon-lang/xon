import { parseType } from '../../parse';
import { UnionTypeTree } from './union-type.tree';

test('union types', () => {
  const code = 'Float || Integer';
  const tree = parseType<UnionTypeTree>(code);
  expect(tree).toBeInstanceOf(UnionTypeTree);

  expect(tree.types.length).toBe(2);
  expect(tree.types[0].name).toBe('Float');
  expect(tree.types[1].name).toBe('Integer');
});
