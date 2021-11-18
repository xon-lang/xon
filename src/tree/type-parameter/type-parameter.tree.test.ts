import { parseTypeParameter } from '../parse';
import { TypeParameterTree } from './type-parameter.tree';

test('has data type', () => {
  const code = 'T';
  const tree = parseTypeParameter(code);
  expect(tree).toBeInstanceOf(TypeParameterTree);

  expect(tree.id.text).toBe('T');
  expect(tree.hasSpread).toBe(false);
});

test('has data and meta types', () => {
  const code = '...T';
  const tree = parseTypeParameter(code);
  expect(tree).toBeInstanceOf(TypeParameterTree);

  expect(tree.id.text).toBe('T');
  expect(tree.hasSpread).toBe(true);
});
