import { parseMember } from '../../../../parse';
import { PropertyMemberTree } from './property-member.tree';

test('array property', () => {
  const code = 's Array<String>';
  const tree = parseMember<PropertyMemberTree>(code);

  expect(tree.name).toBe('s');
  expect(tree.type.name).toBe('Array');
  expect(tree.type.generics[0].name).toBe('String');
});
