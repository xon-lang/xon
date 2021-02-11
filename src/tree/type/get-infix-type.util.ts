import { ExpressionTree } from '../expression/expression.tree';
import { TypeTree } from './type.tree';

export const getInfixType = (
  operator: string,
  left: ExpressionTree,
  right: ExpressionTree,
): TypeTree => {
  const foundInfixOperatorMethod = left
    .getType()
    .definition()
    .infixOperators.find((x) => x.operator === operator && x.arg.type.equals(right.getType()));
  if (foundInfixOperatorMethod) {
    return foundInfixOperatorMethod.returnType;
  }
  throw new Error(`No infix operator method for ${operator}`);
};
