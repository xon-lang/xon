import { parseType } from '../../parse';
import { ArrayTypeTree } from './array-type.tree';

test('string array', () => {
  const code = 'String[32]';
  const tree = parseType<ArrayTypeTree>(code);
  expect(tree).toBeInstanceOf(ArrayTypeTree);

  expect(tree.itemType.name).toBe('String');
  expect(tree.toString()).toBe('String[32]');
});
