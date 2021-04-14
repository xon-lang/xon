import { parseType } from '../../parse';
import { VoidTypeTree } from './void-type.tree';

test('number return function', () => {
  const code = 'void';
  const tree = parseType<VoidTypeTree>(code);
  expect(tree).toBeInstanceOf(VoidTypeTree);
});
