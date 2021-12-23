import { parseId } from '../parse';
import { IdNode } from './id-node';

test('abc', () => {
  const code = `abc`;
  const tree = parseId(code);
  expect(tree).toBeInstanceOf(IdNode);

  expect(tree.name.text).toBe('abc');
});
