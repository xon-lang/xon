import { parseType } from '../../parse';
import { ParenthesizedTypeTree } from './parenthesized-type.tree';

test('plain string type', () => {
  const code = '(String?)';
  const tree = parseType<ParenthesizedTypeTree>(code);
  expect(tree).toBeInstanceOf(ParenthesizedTypeTree);

  expect(tree.toString()).toBe('(String?)');
  expect(tree.innerType.toString()).toBe('String?');
});
