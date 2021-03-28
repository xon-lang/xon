import { parseMember } from '../../../../parse';
import { GenericTypeTree } from '../../../type/generic-type/generic-type.tree';
import { PlainTypeTree } from '../../../type/plain-type/plain-type.tree';
import { PropertyMemberTree } from './property-member.tree';

test('array property', () => {
  const code = 's Array<String>';
  const tree = parseMember<PropertyMemberTree>(code);

  expect(tree.name).toBe('s');
  expect(tree.isPrivate).toBe(false);
  expect((tree.type as GenericTypeTree).mainType.name).toBe('Array');
  expect(((tree.type as GenericTypeTree).generics[0] as PlainTypeTree).name).toBe('String');
});

test('private integer', () => {
  const code = '_a Integer';
  const tree = parseMember<PropertyMemberTree>(code);

  expect(tree.name).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect((tree.type as PlainTypeTree).name).toBe('Integer');
});
