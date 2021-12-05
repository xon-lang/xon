import { parseType } from '../../parse';
import { IdTypeTree } from '../id/id-type.tree';
import { ArrayTypeTree } from './array-type.tree';

test('string array', () => {
  const code = 'String[]';
  const tree = parseType<ArrayTypeTree>(code);
  expect(tree).toBeInstanceOf(ArrayTypeTree);

  expect(tree.itemType).toBeInstanceOf(IdTypeTree);
  expect((tree.itemType as IdTypeTree).id.text).toBe('String');
});
