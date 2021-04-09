import { parseType } from '../../parse';
import { PlainTypeTree } from './plain-type.tree';

test('plain string type', () => {
  const code = 'String';
  const tree = parseType<PlainTypeTree>(code);
  expect(tree).toBeInstanceOf(PlainTypeTree);

  expect(tree.name).toBe('String');
});
