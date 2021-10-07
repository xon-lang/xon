import { ListingTree } from '../../../listing/listing.tree';
import { parseListing, parseMember } from '../../../parse';
import { MethodMemberTree } from './method-member.tree';

test('method member', () => {
  const code = '_funcName(argA Integer, argB Float, argC String) String:\n    log(222)';
  const tree = parseMember<MethodMemberTree>(code);
  expect(tree).toBeInstanceOf(MethodMemberTree);

  expect(tree.name).toBe('_funcName');
  expect(tree.isPrivate).toBe(true);
  expect(tree.parameters.length).toBe(3);

  expect(tree.parameters[0].name).toBe('argA');
  expect(tree.parameters[0].type.name).toBe('Integer');

  expect(tree.parameters[1].name).toBe('argB');
  expect(tree.parameters[1].type.name).toBe('Float');

  expect(tree.parameters[2].name).toBe('argC');
  expect(tree.parameters[2].type.name).toBe('String');

  expect(tree.returnType.name).toBe('String');
});

test('abstract method member', () => {
  const code = 'funcName(a Integer) String';
  const tree = parseMember<MethodMemberTree>(code);
  expect(tree).toBeInstanceOf(MethodMemberTree);

  expect(tree.name).toBe('funcName');
  expect(tree.isPrivate).toBe(false);

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name).toBe('a');
  expect(tree.returnType.toString()).toBe('String');

  expect(tree.body).toBeUndefined();
});

test('no return type', () => {
  const code = 'funcName(a Integer) null';
  const tree = parseMember<MethodMemberTree>(code);
  expect(tree).toBeInstanceOf(MethodMemberTree);

  expect(tree.name).toBe('funcName');
  expect(tree.isPrivate).toBe(false);

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name).toBe('a');
  expect(tree.returnType.toString()).toBe('null');

  expect(tree.body).toBeUndefined();
});

test('several abstract methods', () => {
  const code = 'T:\n    f(a Integer) null\n    f(a Integer) null';
  const tree = parseListing(code);
  expect(tree).toBeInstanceOf(ListingTree);
});
