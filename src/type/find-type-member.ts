import { DefinitionTree } from '../tree/definition/definition.tree';
import { MethodMemberTree } from '../tree/definition/member/method-member/method-member.tree';
import { PropertyMemberTree } from '../tree/definition/member/property-member/property-member.tree';
import { createActionType, createFunctionType } from '../tree/type/type-helper';
import { TypeTree } from '../tree/type/type.tree';
import { findDefinition } from './definition-storage';
import { GenericsMap } from './generics-map';

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

  const definitionGenericsMap: GenericsMap = new Map(
    definition.generics.map((x, i) => [x, leftType.generics[i]]),
  );
  const operatorMembers = definition.operators.filter(
    (x) =>
      x.name === name &&
      x.parameters[1].type.useGenericsMap(definitionGenericsMap).equals(rightType),
  );
  if (operatorMembers.length === 0) throw new Error(`Operator "${name}" not found`);
  if (operatorMembers.length > 1)
    throw new Error(
      `Cannot choose right operator "${name}" from ${operatorMembers.length} overloads`,
    );
  if (!operatorMembers[0].returnType) throw new Error(`Operator "${name}" must have return type`);

  return operatorMembers[0].returnType.useGenericsMap(definitionGenericsMap);
}

export function findMember(type: TypeTree, name: string): TypeTree {
  const definition = findDefinitionByType(type);
  if (type.generics.length !== definition.generics.length) throw new Error('Wrong generics count');

  const members = definition.members.filter((x) => x.name === name);
  if (members.length === 0) throw new Error(`Member "${name}" not found`);
  if (members.length > 1)
    throw new Error(`Cannot choose right member "${name}" of ${members.length}`);

  const genericsMap: GenericsMap = new Map(
    definition.generics.map((x, i) => [x, type.generics[i]]),
  );

  const member = members[0];

  if (member instanceof PropertyMemberTree) {
    return member.returnType.useGenericsMap(genericsMap);
  }
  if (member instanceof MethodMemberTree) {
    if (member.returnType)
      return createFunctionType(
        member.parameters.map((x) => x.type.useGenericsMap(genericsMap)),
        member.returnType.useGenericsMap(genericsMap),
      );
    return createActionType(member.parameters.map((x) => x.type.useGenericsMap(genericsMap)));
  }

  throw new Error(`Couldn't find member ${name}`);
}

// export function findTheBestMethod<T extends MethodType>(
//   definition: DefinitionTree,
//   members: T[],
//   fitArgs: ExpressionTree[],
// ): T {
//   const candidates = members
//     .filter((x) => x.parameters.length === fitArgs.length)
//     .map((x) => ({
//       method: x,
//       weight: x.parameters
//         .map((z, i) => z.dataType.fitWeight(fitArgs[i]))
//         .reduce((p, c) => p * c, 1),
//     }))
//     .filter((x) => x.weight > 0)
//     .sort((a, b) => b.weight - a.weight);

//   if (candidates.length) return candidates[0].method;
//   if (definition.inheritanceType && definition.inheritanceType instanceof PlainTypeTree)
//     return findTheBestMethod(getTypeDefinition(definition.inheritanceType), members, fitArgs);
//   return null;
// }
