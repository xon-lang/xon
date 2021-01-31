import { parseMember } from '../../../../parse';
import { PropertyMemberTree } from './property-member.tree';

test('positive number', () => {
  const code = 's str[]';
  const tree = parseMember<PropertyMemberTree>(code);

  expect(tree.name).toBe('s');
  expect(tree.type.name).toBe('str');
  expect(tree.type.isArray).toBe(true);
});
