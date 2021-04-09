import { parseType } from '../../parse';
import { PlainTypeTree } from '../plain-type/plain-type.tree';
import { ArrayTypeTree } from './array-type.tree';

test('string array', () => {
  const code = 'String[]';
  const tree = parseType<ArrayTypeTree>(code);
  expect(tree).toBeInstanceOf(ArrayTypeTree);

  expect((tree.itemType as PlainTypeTree).name).toBe('String');
});
