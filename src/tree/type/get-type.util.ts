import { ExpressionTree } from '../expression/expression.tree';
import { TypeTree } from './type.tree';

export const getOperatorType = (
  operator: string,
  left: ExpressionTree,
  right: ExpressionTree,
): TypeTree => {
  const foundOperatorMethod = left
    .getType()
    .definition()
    .operators.find((x) => x.operator === operator && x.right.type.equals(right.getType()));

  if (foundOperatorMethod) {
    return foundOperatorMethod.returnType;
  }
  throw new Error(`No binary operator method for ${operator}`);
};
