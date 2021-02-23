import { parseType } from '../../parse';

test('generics', () => {
  const code = 'Array<Integer, Float>';
  const tree = parseType(code);
  expect(tree.isMeta).toBe(false);
  expect(tree.name).toBe('Array');
  expect(tree.generics.length).toBe(2);
  expect(tree.generics[0].name).toBe('Integer');
  expect(tree.generics[1].name).toBe('Float');
});

test('meta type', () => {
  const code = '#IdExpressionTree';
  const tree = parseType(code);
  expect(tree.isMeta).toBe(true);
  expect(tree.name).toBe('IdExpressionTree');
  expect(tree.generics.length).toBe(0);
});
