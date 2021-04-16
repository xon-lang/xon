import { LiteralExpressionTree } from '../../../expression/literal-expression/literal-expression.tree';
import { parseMember } from '../../../parse';
import { ActionTypeTree } from '../../../type/action-type/action-type.tree';
import { FunctionTypeTree } from '../../../type/function-type/function-type.tree';
import { PlainTypeTree } from '../../../type/plain-type/plain-type.tree';
import { PropertyMemberTree } from './property-member.tree';

test('array property', () => {
  const code = 's Array<String>';
  const tree = parseMember<PropertyMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyMemberTree);

  expect(tree.name).toBe('s');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type.name).toBe('Array');
  expect((tree.type as PlainTypeTree).generics[0].name).toBe('String');
  expect(tree.value).toBeUndefined();
});

test('private integer', () => {
  const code = '_a Integer';
  const tree = parseMember<PropertyMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyMemberTree);

  expect(tree.name).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type.name).toBe('Integer');
  expect(tree.value).toBeUndefined();
});

test('integer value', () => {
  const code = '_a Integer =  9';
  const tree = parseMember<PropertyMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyMemberTree);

  expect(tree.name).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type.name).toBe('Integer');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(9);
});

test('has function type', () => {
  const code = '_a (Integer) String';
  const tree = parseMember<PropertyMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyMemberTree);

  expect(tree.name).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  const type = tree.type as FunctionTypeTree;
  expect(type.name).toBe('Function');
  expect(type.parameters.length).toBe(1);
  expect(type.parameters[0].name).toBe('Integer');
  expect(type.returnType.name).toBe('String');
  expect(tree.value).toBeUndefined();
});

test('has action type', () => {
  const code = '_a (Integer)';
  const tree = parseMember<PropertyMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyMemberTree);

  expect(tree.name).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  const type = tree.type as ActionTypeTree;
  expect(type.name).toBe('Action');
  expect(type.parameters.length).toBe(1);
  expect(type.parameters[0].name).toBe('Integer');
  expect(tree.value).toBeUndefined();
});
