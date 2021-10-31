import { LiteralExpressionTree } from '../../../../expression/literal-expression/literal-expression.tree';
import { parseClassMember } from '../../../../parse';
import { FunctionTypeTree } from '../../../../type/function-type/function-type.tree';
import { IdTypeTree } from '../../../../type/id-type/id-type.tree';
import { PropertyClassMemberTree } from './property-class-member-tree';

test('array property', () => {
  const code = 's Array<String>';
  const tree = parseClassMember<PropertyClassMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyClassMemberTree);

  expect(tree.id.text).toBe('s');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type.name).toBe('Array');
  expect((tree.type as IdTypeTree).genericArguments[0].name).toBe('String');
  expect(tree.value).toBe(null);
});

test('private integer', () => {
  const code = '_a Integer';
  const tree = parseClassMember<PropertyClassMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyClassMemberTree);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type.name).toBe('Integer');
  expect(tree.value).toBe(null);
});

test('integer value', () => {
  const code = '_a Integer =  9';
  const tree = parseClassMember<PropertyClassMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyClassMemberTree);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type.name).toBe('Integer');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(9);
});

test('has function type', () => {
  const code = '_a (i Integer) String';
  const tree = parseClassMember<PropertyClassMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyClassMemberTree);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  const type = tree.type as FunctionTypeTree;
  expect(type.name).toBe('Function');
  expect(type.parameters.length).toBe(1);
  expect(type.parameters[0].type.name).toBe('Integer');
  expect(type.returnType.name).toBe('String');
  expect(tree.value).toBe(null);
});
