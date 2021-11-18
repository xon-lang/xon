import { parseGenericParameter } from '../parse';
import { GenericParameterTree } from './generic-parameter.tree';

test('has data type', () => {
  const code = 'T';
  const tree = parseGenericParameter(code);
  expect(tree).toBeInstanceOf(GenericParameterTree);

  expect(tree.id.text).toBe('T');
  expect(tree.hasSpread).toBe(false);
});

test('has data and meta types', () => {
  const code = '...T';
  const tree = parseGenericParameter(code);
  expect(tree).toBeInstanceOf(GenericParameterTree);

  expect(tree.id.text).toBe('_b');
  expect(tree.hasSpread).toBe(true);
});
