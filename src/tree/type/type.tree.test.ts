import { PropertyClassTypeMemberTree } from '../class-type/class-type-member/property-definition-member/property-class-type-member-tree';
import { parseClassTypeMember } from '../parse';

test('1', () => {
  const code = 'a ((String ) Integer) []';
  const tree = parseClassTypeMember<PropertyClassTypeMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyClassTypeMemberTree);

  expect(tree.property.name).toBe('a');
  expect(tree.property.type.toString()).toBe('((String) Integer)[]');
});

test('2', () => {
  const code = 'a ((String | null ) Integer |  "hello") []';
  const tree = parseClassTypeMember<PropertyClassTypeMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyClassTypeMemberTree);

  expect(tree.property.name).toBe('a');
  expect(tree.property.type.toString()).toBe('((String | null) Integer | "hello")[]');
});
