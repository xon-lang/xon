import { parseParameter } from '../parse';
import { ParameterTree } from './parameter.tree';

test('has data type', () => {
  const code = 'b String';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.id.text).toBe('b');
  expect(tree.type.name).toBe('String');
});

test('has data and meta types', () => {
  const code = '_b String#Literal';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.id.text).toBe('_b');
  expect(tree.type.name).toBe('String');
});
