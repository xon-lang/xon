import { parseType } from '../../parse';
import { NullableTypeTree } from './nullable-type.tree';

test('plain string type', () => {
  const code = 'String?';
  const tree = parseType<NullableTypeTree>(code);
  expect(tree).toBeInstanceOf(NullableTypeTree);

  expect(tree.baseType.name).toBe('String');
});
