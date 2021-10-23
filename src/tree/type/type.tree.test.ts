import { PropertyClassMemberTree } from '../class-type/class-type-member/property-definition-member/property-class-type-member-tree';
import { parseClassMember } from '../parse';

test('1', () => {
  const code = 'a ((String ) Integer) []';
  const tree = parseClassMember<PropertyClassMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyClassMemberTree);

  expect(tree.property.name).toBe('a');
  expect(tree.property.type.toString()).toBe('((String) Integer)[]');
});

test('2', () => {
  const code = 'a ((String | null ) Integer |  "hello") []';
  const tree = parseClassMember<PropertyClassMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyClassMemberTree);

  expect(tree.property.name).toBe('a');
  expect(tree.property.type.toString()).toBe('((String | null) Integer | "hello")[]');
});
