import { parseType } from '../../parse';
import { ArrayTypeTree } from './array-type.tree';

test('string array', () => {
  const code = 'String[]';
  const tree = parseType<ArrayTypeTree>(code);
  expect(tree).toBeInstanceOf(ArrayTypeTree);

  expect(tree.itemType.name).toBe('String');
});
