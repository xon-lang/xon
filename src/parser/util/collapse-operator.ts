import { String2 } from '../../lib/core';
import { Node } from '../../parser/node/node';
import { OperatorNode } from '../../parser/node/operator/operator-node';
import { postfixNode } from '../../parser/node/postfix/postfix-node';
import { prefixNode } from '../../parser/node/prefix/prefix-node';
import { ParserContext } from '../../parser/parser-context';
import { infixNode } from '../node/infix/infix-node';
import { NodeType } from '../node/node-type';
import { OperatorType, RecursiveType } from '../parser-config';
import { is } from './is';

export function collapseOperator(
  context: ParserContext,
  operators: String2[],
  operatorType: OperatorType,
  recursiveType: RecursiveType,
): void {
  for (let i = 0; i < context.nodes.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : context.nodes.length - i - 1;
    const operator = context.nodes[index];

    if (!is<OperatorNode>(operator, NodeType.OPERATOR) || !operators.includes(operator.text)) {
      continue;
    }

    const left = context.nodes[index - 1];
    const right: Node | null = context.nodes[index + 1] ?? null;

    if (
      operatorType === OperatorType.PREFIX &&
      !is<OperatorNode>(right, NodeType.OPERATOR) &&
      (index === 0 || is<OperatorNode>(left, NodeType.OPERATOR))
    ) {
      const prefix = prefixNode(context, operator, right);
      context.nodes.splice(index, 2, prefix);
      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }

    if (
      operatorType === OperatorType.POSTFIX &&
      !is<OperatorNode>(left, NodeType.OPERATOR) &&
      (index === context.nodes.length - 1 || is<OperatorNode>(right, NodeType.OPERATOR))
    ) {
      const postfix = postfixNode(context, operator, left);
      context.nodes.splice(index - 1, 2, postfix);

      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }

    if (
      operatorType === OperatorType.INFIX &&
      !is<OperatorNode>(left, NodeType.OPERATOR) &&
      !is<OperatorNode>(right, NodeType.OPERATOR)
    ) {
      const infix = infixNode(context, operator, left, right);
      // eslint-disable-next-line no-magic-numbers
      context.nodes.splice(index - 1, 3, infix);

      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }
  }
}
