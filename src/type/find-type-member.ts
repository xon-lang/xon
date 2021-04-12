import { DefinitionTree } from '../tree/definition/definition.tree';
import { MethodMemberTree } from '../tree/definition/member/method-member/method-member.tree';
import { PropertyMemberTree } from '../tree/definition/member/property-member/property-member.tree';
import { createFunctionType } from '../tree/type/type-helper';
import { TypeTree } from '../tree/type/type.tree';
import { findDefinition } from './definition-storage';
import { GenericsMap } from './expression.type';

export function findDefinitionByType(type: TypeTree): DefinitionTree {
  return findDefinition(type.name);
}

export function findOperatorMember(
  leftType: TypeTree,
  name: string,
  rightType: TypeTree,
): TypeTree {
  const definition = findDefinitionByType(leftType);
  if (leftType.generics.length !== definition.generics.length)
    throw new Error('Wrong generics count');

  const genericsMap: GenericsMap = new Map(
    definition.generics.map((x, i) => [x, leftType.generics[i]]),
  );
  const operatorMembers = definition.operators.filter(
    (x) =>
      x.name === name && x.parameters[1].typeTree.replaceGenerics(genericsMap).equals(rightType),
  );
  if (operatorMembers.length === 0) throw new Error(`Operator "${name}" not found`);
  if (operatorMembers.length > 0) throw new Error(`Cannot choose right operator "${name}"`);
  if (!operatorMembers[0].returnType) throw new Error(`Operator "${name}" must have return type`);

  return operatorMembers[0].returnType.replaceGenerics(genericsMap);
}

export function findMember(type: TypeTree, name: string): TypeTree {
  const definition = findDefinitionByType(type);
  if (type.generics.length !== definition.generics.length) throw new Error('Wrong generics count');

  const members = definition.members.filter((x) => x.name === name);
  if (members.length === 0) throw new Error(`Member "${name}" not found`);
  if (members.length > 0) throw new Error(`Cannot choose right member "${name}"`);

  const genericsMap: GenericsMap = new Map(
    definition.generics.map((x, i) => [x, type.generics[i]]),
  );

  const member = members[0];

  if (member instanceof PropertyMemberTree) {
    return member.typeTree.replaceGenerics(genericsMap);
  }
  if (member instanceof MethodMemberTree) {
    return createFunctionType(
      member.parameters.map((x) => x.typeTree.replaceGenerics(genericsMap)),
      member.returnType.replaceGenerics(genericsMap),
    );
  }

  throw new Error(`Couldn't find member ${name}`);
}
