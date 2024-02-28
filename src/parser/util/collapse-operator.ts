import { Nothing, String2 } from '../../lib/core';
import { $Node, Node, is } from '../node/node';
import { infixNode } from '../node/syntax/infix/infix-node';
import { postfixNode } from '../node/syntax/postfix/postfix-node';
import { prefixNode } from '../node/syntax/prefix/prefix-node';
import { OperatorNode } from '../node/token/operator/operator-node';
import { OperatorType, RecursiveType } from '../syntax-config';
import { SyntaxContext } from '../syntax-context';

export function collapseOperator(
  context: SyntaxContext,
  operators: String2[],
  operatorType: OperatorType,
  recursiveType: RecursiveType,
): void {
  for (let i = 0; i < context.nodes.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : context.nodes.length - i - 1;
    const operator = context.nodes[index];

    if (!is<OperatorNode>(operator, $Node.OPERATOR) || !operators.includes(operator.text)) {
      continue;
    }

    const left: Node | Nothing = context.nodes[index - 1];
    const right: Node | Nothing = context.nodes[index + 1];

    if (
      operatorType === OperatorType.PREFIX &&
      right &&
      !is<OperatorNode>(right, $Node.OPERATOR) &&
      (index === 0 || is<OperatorNode>(left, $Node.OPERATOR))
    ) {
      const prefix = prefixNode(context, operator, right);
      context.nodes.splice(index, 2, prefix);
      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }

    if (
      operatorType === OperatorType.POSTFIX &&
      left &&
      !is<OperatorNode>(left, $Node.OPERATOR) &&
      (index === context.nodes.length - 1 || is<OperatorNode>(right, $Node.OPERATOR))
    ) {
      const postfix = postfixNode(context, operator, left);
      context.nodes.splice(index - 1, 2, postfix);

      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }

    if (
      operatorType === OperatorType.INFIX &&
      left &&
      right &&
      !is<OperatorNode>(left, $Node.OPERATOR) &&
      !is<OperatorNode>(right, $Node.OPERATOR)
    ) {
      const infix = infixNode(context, operator, left, right);
      context.nodes.splice(index - 1, 3, infix);
      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }
  }
}
