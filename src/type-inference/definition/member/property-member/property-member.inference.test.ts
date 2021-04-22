import { PropertyMemberTree } from '../../../../tree/definition/member/property-member/property-member.tree';
import { parseMember } from '../../../../tree/parse';
import { getMemberInference } from '../member-inference.helper';
import { PropertyMemberInference } from './property-member.inference';

test('has no value', () => {
  const code = 'prop Integer';
  const tree = parseMember<PropertyMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyMemberTree);

  const inference = getMemberInference(tree, new Map()) as PropertyMemberInference;
  expect(inference.type.toString()).toBe('Integer');
});

test('has value', () => {
  const code = 'prop Integer = 77';
  const tree = parseMember<PropertyMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyMemberTree);

  const inference = getMemberInference(tree, new Map()) as PropertyMemberInference;
  expect(inference.type.toString()).toBe('Integer');
  expect(inference.value.type.toString()).toBe('Integer');
});
