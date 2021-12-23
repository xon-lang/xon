import { parseId } from '../parse';
import { IdNode } from './id-node';

test('abc', () => {
  const code = `abc`;
  const node = parseId(code);
  expect(node).toBeInstanceOf(IdNode);

  expect(node.name.text).toBe('abc');
});
