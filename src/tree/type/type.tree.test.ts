import { AttributeClassMemberTree } from '../definition/class-definition/class-member/attribute-class-member/attribute-class-member-tree';
import { parseClassMember } from '../parse';

test('1', () => {
  const code = 'a ((s String) Integer) []';
  const tree = parseClassMember<AttributeClassMemberTree>(code);
  expect(tree).toBeInstanceOf(AttributeClassMemberTree);

  expect(tree.id.text).toBe('a');
  expect(tree.type.toString()).toBe('((s String) Integer)[]');
});

test('2', () => {
  const code = 'a ((s String | null ) Integer |  "hello") []';
  const tree = parseClassMember<AttributeClassMemberTree>(code);
  expect(tree).toBeInstanceOf(AttributeClassMemberTree);

  expect(tree.id.text).toBe('a');
  expect(tree.type.toString()).toBe('((s String | null) Integer | "hello")[]');
});
