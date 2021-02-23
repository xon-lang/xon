import { ExpressionTree } from '../expression/expression.tree';
import { TypeTree } from './type.tree';

export const getBinaryType = (
  operator: string,
  left: ExpressionTree,
  right: ExpressionTree,
): TypeTree => {
  const foundOperatorMethod = left
    .getType()
    .definition()
    .infixOperators.find((x) => x.operator === operator && x.arg.type.equals(right.getType()));

  if (foundOperatorMethod) {
    return foundOperatorMethod.returnType;
  }
  throw new Error(`No binary operator method for ${operator}`);
};

export const getPrefixType = (operator: string, value: ExpressionTree): TypeTree => {
  const foundOperatorMethod = value
    .getType()
    .definition()
    .prefixOperators.find((x) => x.operator === operator);

  if (foundOperatorMethod) {
    return foundOperatorMethod.returnType;
  }
  throw new Error(`No prefix operator method for ${operator}`);
};

export const getPostfixType = (operator: string, value: ExpressionTree): TypeTree => {
  const foundOperatorMethod = value
    .getType()
    .definition()
    .postfixOperators.find((x) => x.operator === operator);

  if (foundOperatorMethod) {
    return foundOperatorMethod.returnType;
  }
  throw new Error(`No postfix operator method for ${operator}`);
};
