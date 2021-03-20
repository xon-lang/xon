import { ExpressionTree } from '../expression/expression.tree';
import { TypeTree } from './type.tree';

export const getOperatorType = (
  operator: string,
  value: ExpressionTree,
  args: ExpressionTree[],
): TypeTree => {
  const foundOperatorMethod = value
    .getType()
    .definition()
    .operators.find(
      (x) =>
        x.operator === operator && x.parameters.every((z, i) => z.type.equals(args[i].getType())),
    );

  if (foundOperatorMethod) {
    return foundOperatorMethod.returnType;
  }
  throw new Error(`No binary operator method for ${operator}`);
};
