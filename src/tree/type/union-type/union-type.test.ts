import { parseType } from '../../parse';
import { PlainTypeTree } from '../plain-type/plain-type.tree';
import { UnionTypeTree } from './union-type.tree';

test('union types', () => {
  const code = 'Float | Integer';
  const tree = parseType<UnionTypeTree>(code);
  expect(tree).toBeInstanceOf(UnionTypeTree);

  expect(tree.dataTypes.length).toBe(2);
  expect((tree.dataTypes[0] as PlainTypeTree).name).toBe('Float');
  expect((tree.dataTypes[1] as PlainTypeTree).name).toBe('Integer');
});
