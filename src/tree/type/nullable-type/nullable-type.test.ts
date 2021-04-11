import { parseType } from '../../parse';
import { PlainTypeTree } from '../plain-type/plain-type.tree';
import { NullableTypeTree } from './nullable-type.tree';

test('plain string type', () => {
  const code = 'String?';
  const tree = parseType<NullableTypeTree>(code);
  expect(tree).toBeInstanceOf(NullableTypeTree);

  expect((tree.type as PlainTypeTree).name).toBe('String');
});
