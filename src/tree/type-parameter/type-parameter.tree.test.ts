import { parseTypeParameter } from '../parse';
import { TypeParameterTree } from './type-parameter.tree';

test('parameter name', () => {
  const code = 'T';
  const tree = parseTypeParameter(code);
  expect(tree).toBeInstanceOf(TypeParameterTree);

  expect(tree.id.text).toBe('T');
  expect(tree.restrictionType).toBe(null);
});

test('restricts', () => {
  const code = 'T is String#StringLiteral';
  const tree = parseTypeParameter(code);
  expect(tree).toBeInstanceOf(TypeParameterTree);

  expect(tree.id.text).toBe('T');
  expect(tree.restrictionType.name).toBe('StringLiteral');
});
