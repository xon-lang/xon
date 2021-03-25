import { parseType } from '../../parse';

test('generics', () => {
  const code = 'Array<Integer, Float>';
  const tree = parseType(code);
  expect(tree.metaName).toBe('Any');
  expect(tree.name).toBe('Array');
  expect(tree.generics.length).toBe(2);
  expect(tree.generics[0].name).toBe('Integer');
  expect(tree.generics[1].name).toBe('Float');
});

test('type', () => {
  const code = 'Any#IdExpressionTree';
  const tree = parseType(code);
  expect(tree.metaName).toBe('IdExpressionTree');
  expect(tree.name).toBe('Any');
  expect(tree.generics.length).toBe(0);
});

test('meta type generics', () => {
  const code = 'Integer<Boolean>#IdExpressionTree';
  const tree = parseType(code);
  expect(tree.metaName).toBe('IdExpressionTree');
  expect(tree.name).toBe('Integer');
  expect(tree.generics.length).toBe(1);
  expect(tree.generics[0].name).toBe('Boolean');
});
