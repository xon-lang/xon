import { IdentifierStack } from '../../../../identifier-stack';
import { parseMember } from '../../../../parse';
import { BaseTree } from '../../../base.tree';
import { MethodMemberTree } from './method-member.tree';

beforeEach(() => {
  BaseTree.identifierStack = new IdentifierStack();
});

test('method member', () => {
  const code = '_funcName(argA Integer, argB Float, argC String) String:\n    log(222)';
  const tree = parseMember<MethodMemberTree>(code);

  expect(tree.name).toBe('_funcName');
  expect(tree.isPrivate).toBe(true);
  expect(tree.isAbstract).toBe(false);
  expect(tree.returnType?.name).toBe('String');
  expect(tree.parameters.length).toBe(3);

  expect(tree.parameters[0].name).toBe('argA');
  expect(tree.parameters[0].type.name).toBe('Integer');

  expect(tree.parameters[1].name).toBe('argB');
  expect(tree.parameters[1].type.name).toBe('Float');

  expect(tree.parameters[2].name).toBe('argC');
  expect(tree.parameters[2].type.name).toBe('String');
});

test('abstract method member', () => {
  const code = 'funcName(a Integer) String';
  const tree = parseMember<MethodMemberTree>(code);

  expect(tree.name).toBe('funcName');
  expect(tree.isPrivate).toBe(false);
  expect(tree.isAbstract).toBe(true);
  expect(tree.returnType?.name).toBe('String');

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name).toBe('a');
  expect(tree.parameters[0].type.name).toBe('Integer');
});

test('no return type', () => {
  const code = 'funcName(a Integer)';
  const tree = parseMember<MethodMemberTree>(code);

  expect(tree.name).toBe('funcName');
  expect(tree.isPrivate).toBe(false);
  expect(tree.isAbstract).toBe(true);
  expect(tree.returnType).toBeFalsy();

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name).toBe('a');
  expect(tree.parameters[0].type.name).toBe('Integer');
});
