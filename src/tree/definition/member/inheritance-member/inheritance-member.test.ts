import { parseMember } from '../../../../parse';
import { InheritanceMemberTree } from './inheritance-member.tree';

test('array property', () => {
  const code = '...Map<String, Number>';
  const tree = parseMember<InheritanceMemberTree>(code);

  expect(tree.type.name).toBe('Map');
  expect(tree.type.generics.length).toBe(2);
  expect(tree.type.generics[0].name).toBe('String');
  expect(tree.type.generics[1].name).toBe('Number');
});
