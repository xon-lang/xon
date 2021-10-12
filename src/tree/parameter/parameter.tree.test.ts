import { parseParameter } from '../parse';
import { ParameterTree } from './parameter.tree';

test('has data type', () => {
  const code = 'b String';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.name).toBe('b');
  expect(tree.isPrivate).toBe(false);
  expect(tree.metaType).toBeUndefined();
  expect(tree.type.name).toBe('String');
});

test('has data and meta types', () => {
  const code = '_b String#Literal';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.name).toBe('_b');
  expect(tree.isPrivate).toBe(true);
  expect(tree.metaType).toBe('Literal');
  expect(tree.type.name).toBe('String');
});
