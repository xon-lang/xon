import { Issue } from '../issue-service/issue';
import { DefinitionTree } from '../tree/definition/definition.tree';
import { MethodMemberTree } from '../tree/definition/member/method-member/method-member.tree';
import { PropertyMemberTree } from '../tree/definition/member/property-member/property-member.tree';
import { createFunctionType } from '../tree/type/type-helper';
import { TypeTree } from '../tree/type/type.tree';
import { findDefinition } from './definition-storage';
import { GenericsMap } from './generics-map';

export function findDefinitionByType(type: TypeTree): DefinitionTree {
  return findDefinition(type.name);
}

export function findOperatorMember(
  name: string,
  leftType: TypeTree,
  rightType: TypeTree,
): TypeTree {
  const definition = findDefinitionByType(leftType);
  if (leftType.generics.length !== definition.declaredGenerics.length)
    throw Issue.errorFromTree(definition, 'Wrong generics count').toError();

  const definitionGenericsMap: GenericsMap = new Map(
    definition.declaredGenerics.map((x, i) => [x, leftType.generics[i]]),
  );
  const operatorMembers = definition.operators.filter(
    (x) =>
      x.name === name &&
      x.parameters[1].type.useGenericsMap(definitionGenericsMap).equals(rightType),
  );

  if (operatorMembers.length === 0)
    throw Issue.errorFromTree(
      leftType,
      `Operator "${name}" not found in the class "${leftType.name}"`,
    ).toError();

  if (operatorMembers.length > 1)
    throw Issue.errorFromTree(
      operatorMembers[0],
      `Cannot choose right operator "${name}" from ${operatorMembers.length} overloads in the class "${leftType.name}"`,
    ).toError();

  if (!operatorMembers[0].returnType)
    throw Issue.errorFromTree(
      operatorMembers[0],
      `Operator "${name}" must have return type`,
    ).toError();

  return operatorMembers[0].returnType.useGenericsMap(definitionGenericsMap);
}

export function getMemberType(type: TypeTree, name: string): TypeTree {
  const definition = findDefinitionByType(type);
  if (type.generics.length !== definition.declaredGenerics.length)
    throw Issue.errorFromTree(definition, 'Wrong generics count').toError();

  const members = definition.members.filter((x) => x.name === name);

  if (members.length === 0)
    throw Issue.errorFromTree(definition, `Member "${name}" not found`).toError();

  if (members.length > 1)
    throw Issue.errorFromTree(
      members[0],
      `Cannot choose right member "${name}" of ${members.length}`,
    ).toError();

  const genericsMap: GenericsMap = new Map(
    definition.declaredGenerics.map((x, i) => [x, type.generics[i]]),
  );

  const member = members[0];

  if (member instanceof PropertyMemberTree) {
    return member.type.useGenericsMap(genericsMap);
  }
  if (member instanceof MethodMemberTree) {
    return createFunctionType(
      member.declaredGenerics,
      member.parameters.map((x) => x.type.useGenericsMap(genericsMap)),
      member.returnType.useGenericsMap(genericsMap),
    );
  }

  throw Issue.errorFromTree(definition, `Couldn't find member ${name}`).toError();
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
