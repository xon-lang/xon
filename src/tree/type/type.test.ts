import { PropertyMemberTree } from '../definition/member/property-member/property-member.tree';
import { parseMember } from '../parse';

test('1', () => {
  const code = 'a ((String ) Integer) []';
  const tree = parseMember<PropertyMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyMemberTree);

  expect(tree.name).toBe('a');
  expect(tree.type.toString()).toBe('((String) Integer)[]');
});

test('2', () => {
  const code = 'a ((String | null ) Integer |  "hello") []';
  const tree = parseMember<PropertyMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyMemberTree);

  expect(tree.name).toBe('a');
  expect(tree.type.toString()).toBe('((String | null) Integer | "hello")[]');
});
