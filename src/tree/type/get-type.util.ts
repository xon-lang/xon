import { IssueService } from '../../issue-service/issue-service';
import { ArgumentTree } from '../argument/argument.tree';
import { DefinitionTree } from '../definition/definition.tree';
import { IndexMemberTree } from '../definition/member/index-member/index-member.tree';
import { InitMemberTree } from '../definition/member/init-member/init-member.tree';
import { MethodMemberTree } from '../definition/member/method-member/method-member.tree';
import { OperatorMemberTree } from '../definition/member/operator-member/operator-member.tree';
import { PropertyMemberTree } from '../definition/member/property-member/property-member.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { FunctionTypeTree } from './function-type/function-type.tree';
import { getTypeDefinition } from './get-lib-type.util';
import { PlainTypeTree } from './plain-type/plain-type.tree';
import { TypeTree } from './type.tree';

type MethodType = InitMemberTree | IndexMemberTree | OperatorMemberTree | MethodMemberTree;

export function findTheBestMethod<T extends MethodType>(
  definition: DefinitionTree,
  members: T[],
  fitArgs: ExpressionTree[],
): T {
  const candidates = members
    .filter((x) => x.parameters.length === fitArgs.length)
    .map((x) => ({
      method: x,
      weight: x.parameters
        .map((z, i) => z.getType().fitWeight(fitArgs[i]))
        .reduce((p, c) => p * c, 1),
    }))
    .filter((x) => x.weight > 0)
    .sort((a, b) => b.weight - a.weight);

  if (candidates.length) return candidates[0].method;
  if (definition.inheritanceType && definition.inheritanceType instanceof PlainTypeTree)
    return findTheBestMethod(getTypeDefinition(definition.inheritanceType), members, fitArgs);
  return null;
}

export const getOperatorType = (
  operator: string,
  left: ExpressionTree,
  right: ExpressionTree,
): TypeTree => {
  if (!left.getType())
    IssueService.instance.addError(
      left,
      'Left operand has not data type',
      `Set "${left.metaType}" expression data type`,
    );

  const definition = getTypeDefinition(left.getType());

  const foundMethod = findTheBestMethod(
    definition,
    definition.operators.filter((x) => x.name === operator),
    [left, right],
  );

  if (foundMethod) {
    return (foundMethod.getType() as FunctionTypeTree).returnType;
  }

  throw IssueService.instance.addError(
    left,
    `Wrong operation "${left.getType().toString()} ${operator} ${right.getType().toString()}"`,
    `Add "${operator}" operator in "${left
      .getType()
      .toString()}" with "${right.getType().toString()}" parameter`,
  );
};

export function findPropertyMember(type: TypeTree, name: string): PropertyMemberTree {
  const definition = getTypeDefinition(type);
  return definition.properties.find((x) => x.name === name);
}

export function findInitMember(type: TypeTree, args: ArgumentTree[]): InitMemberTree {
  const definition = getTypeDefinition(type);
  return findTheBestMethod(
    definition,
    definition.inits,
    args.map((x) => x.value),
  );
}

export function findIndexMember(type: TypeTree, args: ArgumentTree[]): IndexMemberTree {
  const definition = getTypeDefinition(type);
  return findTheBestMethod(
    definition,
    definition.indexes,
    args.map((x) => x.value),
  );
}

export function findOperatorMember(
  type: TypeTree,
  name: string,
  args: ArgumentTree[],
): OperatorMemberTree {
  const definition = getTypeDefinition(type);
  return findTheBestMethod(
    definition,
    definition.operators.filter((x) => x.name === name),
    args.map((x) => x.value),
  );
}

export function findMethod(type: TypeTree, name: string, args: ArgumentTree[]): MethodMemberTree {
  const definition = getTypeDefinition(type);
  return findTheBestMethod(
    definition,
    definition.methods.filter((x) => x.name === name),
    args.map((x) => x.value),
  );
}
