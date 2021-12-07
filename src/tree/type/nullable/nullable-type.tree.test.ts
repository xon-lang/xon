import { parseType } from '../../parse';
import { IdTypeTree } from '../id/id-type.tree';
import { NullableTypeTree } from './nullable-type.tree';

test('plain string type', () => {
  const code = 'String?';
  const tree = parseType<NullableTypeTree>(code);
  expect(tree).toBeInstanceOf(NullableTypeTree);

  expect(tree.innerType).toBeInstanceOf(IdTypeTree);
  expect((tree.innerType as IdTypeTree).id.text).toBe('String');
});
