import { parseId } from '../util/parse';
import { IdNode } from './id-node';

test('abc', () => {
  const code = `abc`;
  const node = parseId(code);
  expect(node).toBeInstanceOf(IdNode);

  expect(node.name.text).toBe('abc');
});

test('generics', () => {
  const code = 'A<|String| >';
  const node = parseId(code);
  expect(node).toBeInstanceOf(IdNode);

  expect(node.name.text).toBe('A');
  expect(node.generics.length).toBe(1);
  expect(node.generics[0].id.name.text).toBe('String');
});
