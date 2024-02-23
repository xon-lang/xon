import { Nothing, String2, nothing } from '../../lib/core';
import { infixNode } from '../node/infix/infix-node';
import { $Node, Node } from '../node/node';
import { OperatorNode } from '../node/operator/operator-node';
import { postfixNode } from '../node/postfix/postfix-node';
import { prefixNode } from '../node/prefix/prefix-node';
import { OperatorType, RecursiveType } from '../syntax-config';
import { SyntaxContext } from '../syntax-context';
import { is } from './is';

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

    const left = context.nodes[index - 1];
    const right: Node | Nothing = context.nodes[index + 1] ?? nothing;

    if (
      operatorType === OperatorType.PREFIX &&
      !is<OperatorNode>(right, $Node.OPERATOR) &&
      (index === 0 || is<OperatorNode>(left, $Node.OPERATOR))
    ) {
      const prefix = prefixNode(context, operator, right ?? nothing);
      context.nodes.splice(index, 2, prefix);
      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }

    if (
      operatorType === OperatorType.POSTFIX &&
      !is<OperatorNode>(left, $Node.OPERATOR) &&
      (index === context.nodes.length - 1 || is<OperatorNode>(right, $Node.OPERATOR))
    ) {
      const postfix = postfixNode(context, operator, left ?? nothing);
      context.nodes.splice(index - 1, 2, postfix);

      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }

    if (
      operatorType === OperatorType.INFIX &&
      !is<OperatorNode>(left, $Node.OPERATOR) &&
      !is<OperatorNode>(right, $Node.OPERATOR)
    ) {
      const infix = infixNode(context, operator, left ?? nothing, right ?? nothing);
      context.nodes.splice(index - 1, 3, infix);
      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }
  }
}
