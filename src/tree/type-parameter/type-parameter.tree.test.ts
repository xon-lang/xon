import { parseTypeParameter } from '../parse';
import { TypeParameterTree } from './type-parameter.tree';

test('parameter name', () => {
  const code = 'T';
  const tree = parseTypeParameter(code);
  expect(tree).toBeInstanceOf(TypeParameterTree);

  expect(tree.hasSpread).toBe(false);
  expect(tree.id.text).toBe('T');
  expect(tree.typeRestrict).toBe(null);
  expect(tree.metaRestrict).toBe(null);
});

test('spread and parameter name', () => {
  const code = '...T';
  const tree = parseTypeParameter(code);
  expect(tree).toBeInstanceOf(TypeParameterTree);

  expect(tree.hasSpread).toBe(true);
  expect(tree.id.text).toBe('T');
  expect(tree.typeRestrict).toBe(null);
  expect(tree.metaRestrict).toBe(null);
});

test('restricts', () => {
  const code = '...T is String#StringLiteral';
  const tree = parseTypeParameter(code);
  expect(tree).toBeInstanceOf(TypeParameterTree);

  expect(tree.hasSpread).toBe(true);
  expect(tree.id.text).toBe('T');
  expect(tree.typeRestrict.name).toBe('String');
  expect(tree.metaRestrict).toBe('StringLiteral');
});
