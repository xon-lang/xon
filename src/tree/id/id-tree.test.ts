import { parseId } from '../util/parse';
import { IdTree } from './id-tree';

test('abc', () => {
  const code = `abc`;
  const tree = parseId(code);
  expect(tree).toBeInstanceOf(IdTree);

  expect(tree.name.text).toBe('abc');
});

test('generics', () => {
  const code = 'A<|String| >';
  const tree = parseId(code);
  expect(tree).toBeInstanceOf(IdTree);

  expect(tree.name.text).toBe('A');
  expect(tree.generics.length).toBe(1);
  expect(tree.generics[0].id.name.text).toBe('String');
});
