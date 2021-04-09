import { LiteralExpressionTree } from '../../../expression/literal-expression/literal-expression.tree';
import { parseMember } from '../../../parse';
import { GenericTypeTree } from '../../../type/generic-type/generic-type.tree';
import { PlainTypeTree } from '../../../type/plain-type/plain-type.tree';
import { PropertyMemberTree } from './property-member.tree';

test('array property', () => {
  const code = 's Array<String>';
  const tree = parseMember<PropertyMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyMemberTree);

  expect(tree.name).toBe('s');
  expect((tree.type as GenericTypeTree).name).toBe('Array');
  expect(((tree.type as GenericTypeTree).generics[0] as PlainTypeTree).name).toBe('String');
  expect(tree.value).toBeUndefined();
});

test('private integer', () => {
  const code = '_a Integer';
  const tree = parseMember<PropertyMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyMemberTree);

  expect(tree.name).toBe('_a');
  expect((tree.type as PlainTypeTree).name).toBe('Integer');
  expect(tree.value).toBeUndefined();
});

test('integer value', () => {
  const code = '_a Integer =  9';
  const tree = parseMember<PropertyMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyMemberTree);

  expect(tree.name).toBe('_a');
  expect((tree.type as PlainTypeTree).name).toBe('Integer');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(9);
});
