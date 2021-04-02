import { parseExpression } from '../../parse';
import { DefinitionTree } from '../definition/definition.tree';
import { OperatorMemberTree } from '../definition/member/operator-member/operator-member.tree';
import { OperatorExpressionTree } from '../expression/operator-expression/operator-expression.tree';
import { getTypeDefinition } from './get-lib-type.util';
import { findTheBestMethod } from './get-type.util';
import { PlainTypeTree } from './plain-type/plain-type.tree';

test('findTheBestMethod', () => {
  const code = '1 + 1';

  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(tree).toBeInstanceOf(OperatorExpressionTree);

  const type = tree.getType() as PlainTypeTree;
  expect(type).toBeInstanceOf(PlainTypeTree);
  expect(type.toString()).toBe('Integer');

  const definition = getTypeDefinition(type);
  expect(definition).toBeInstanceOf(DefinitionTree);
  expect(definition.name).toBe('Integer');

  const foundMethod = findTheBestMethod(
    definition,
    definition.operators.filter((x) => x.name === '+'),
    [tree.left, tree.right],
  );
  expect(foundMethod).toBeInstanceOf(OperatorMemberTree);
  expect(foundMethod.name).toBe('+');
  expect(foundMethod.parameters.length).toBe(2);
  expect(foundMethod.parameters[0].name).toBe('a');
  expect(foundMethod.parameters[0].type).toBeInstanceOf(PlainTypeTree);
  expect(foundMethod.parameters[0].type.toString()).toBe('Integer');
  expect(foundMethod.parameters[0].type.metaType).toBeUndefined();
  expect(foundMethod.parameters[1].name).toBe('b');
  expect(foundMethod.parameters[1].type).toBeInstanceOf(PlainTypeTree);
  expect(foundMethod.parameters[1].type.toString()).toBe('Integer');
  expect(foundMethod.parameters[1].type.metaType).toBeUndefined();
});
