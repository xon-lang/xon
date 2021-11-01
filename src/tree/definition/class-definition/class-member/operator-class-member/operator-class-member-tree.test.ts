import { parseClassMember } from '../../../../parse';
import { FunctionTypeTree } from '../../../../type/function-type/function-type.tree';
import { OperatorClassMemberTree } from './operator-class-member-tree';

test('method member', () => {
  const code = 'infix +(left Integer, right Float) Number:\n    log()';
  const tree = parseClassMember<OperatorClassMemberTree>(code);
  expect(tree).toBeInstanceOf(OperatorClassMemberTree);

  expect(tree.attribute.id.text).toBe('+');
  expect(tree.isInfix).toBe(true);

  const type = tree.attribute.type as FunctionTypeTree;
  expect(type).toBeInstanceOf(FunctionTypeTree);
  expect(type.parameters.length).toBe(2);

  expect(type.parameters[0].id.text).toBe('left');
  expect(type.parameters[0].type.name).toBe('Integer');

  expect(type.parameters[1].id.text).toBe('right');
  expect(type.parameters[1].type.name).toBe('Float');

  expect(type.returnType.name).toBe('Number');

  expect(tree.attribute.body.length).toBe(1);
});
