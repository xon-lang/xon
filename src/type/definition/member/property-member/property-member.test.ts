import { PropertyMemberTree } from '../../../../tree/definition/member/property-member/property-member.tree';
import { parseMember } from '../../../../tree/parse';
import { fillMemberTypes } from '../member-type.helper';

test('has no value', () => {
  const code = 'prop Integer';
  const tree = parseMember<PropertyMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyMemberTree);

  fillMemberTypes(tree, new Map());
  expect(tree.returnType.toString()).toBe('Integer');
});

test('has value', () => {
  const code = 'prop Integer = 77';
  const tree = parseMember<PropertyMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyMemberTree);

  fillMemberTypes(tree, new Map());
  expect(tree.returnType.toString()).toBe('Integer');
  expect(tree.value.type.toString()).toBe('Integer');
});
