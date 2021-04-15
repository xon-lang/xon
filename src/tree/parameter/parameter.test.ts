import { parseParameter } from '../parse';
import { ParameterTree } from './parameter.tree';

test('has data type', () => {
  const code = 'b String = 3';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.name).toBe('b');
  expect(tree.metaType).toBeUndefined();
  expect(tree.type.name).toBe('String');
});

test('has data and meta types', () => {
  const code = 'b String#Literal';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.name).toBe('b');
  expect(tree.metaType).toBe('Literal');
  expect(tree.type.name).toBe('String');
});
