import { IssueService } from '../../issue-service/issue-service';
import { DefinitionTree } from '../definition/definition.tree';
import { MethodMemberTree } from '../definition/member/method-member/method-member.tree';
import { OperatorMemberTree } from '../definition/member/operator-member/operator-member.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { getTypeDefinition } from './get-lib-type.util';
import { PlainTypeTree } from './plain-type/plain-type.tree';
import { TypeTree } from './type.tree';

export function findTheBestMethod(
  definition: DefinitionTree,
  name: string,
  args: ExpressionTree[],
): OperatorMemberTree | MethodMemberTree {
  const candidates = [...definition.methods, ...definition.operators]
    .filter((x) => x.name === name && x.parameters.length === args.length)
    .map((x) => ({
      method: x,
      weight: x.parameters.map((z, i) => z.type.fitWeight(args[i])).reduce((p, c) => p * c, 1),
    }))
    .filter((x) => x.weight > 0)
    .sort((a, b) => a.weight - b.weight);

  if (candidates.length) return candidates[0].method;
  if (definition.inheritanceType && definition.inheritanceType instanceof PlainTypeTree)
    return findTheBestMethod(getTypeDefinition(definition.inheritanceType), name, args);
  return null;
}

export const getOperatorType = (
  operator: string,
  left: ExpressionTree,
  right: ExpressionTree,
): TypeTree => {
  const foundMethod = findTheBestMethod(getTypeDefinition(left.getType()), operator, [left, right]);

  if (foundMethod) {
    return foundMethod.returnType;
  }

  throw IssueService.instance.addError(left, `No operator method found for operator "${operator}"`);
};
