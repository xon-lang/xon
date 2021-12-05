import { parseType } from '../../parse';
import { ArrayTypeTree } from '../array/array-type.tree';
import { IdTypeTree } from '../id/id-type.tree';
import { UnionTypeTree } from './union-type.tree';

test('union types', () => {
  const code = 'Float || Integer[]';
  const tree = parseType<UnionTypeTree>(code);
  expect(tree).toBeInstanceOf(UnionTypeTree);

  expect(tree.types.length).toBe(2);

  expect(tree.types[0]).toBeInstanceOf(IdTypeTree);
  expect((tree.types[0] as IdTypeTree).id.text).toBe('Float');

  expect(tree.types[1]).toBeInstanceOf(ArrayTypeTree);
  expect((tree.types[1] as ArrayTypeTree).itemType).toBeInstanceOf(IdTypeTree);
  expect(((tree.types[1] as ArrayTypeTree).itemType as IdTypeTree).id.text).toBe('Integer');
});
