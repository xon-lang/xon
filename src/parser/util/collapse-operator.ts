import { String2 } from '~/lib/core';
import { Node } from '~/parser/node/node';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { postfixNode } from '~/parser/node/postfix/postfix-node';
import { prefixNode } from '~/parser/node/prefix/prefix-node';
import { handleInfix } from '~/parser/util/handle-infix';
import { OperatorType, RecursiveType } from '~/parser/util/operators';
import { NodeType } from '../node/node-type';
import { is } from './is';

export function collapseOperator(
  nodes: Node[],
  operators: String2[],
  operatorType: OperatorType,
  recursiveType: RecursiveType,
): Node | null {
  for (let i = 0; i < nodes.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : nodes.length - i - 1;
    const operator = nodes[index];

    if (!is<OperatorNode>(operator, NodeType.OPERATOR) || !operators.includes(operator.text)) {
      continue;
    }

    const left = nodes[index - 1];
    const right = nodes[index + 1];

    if (
      operatorType === OperatorType.PREFIX &&
      !is(right, NodeType.OPERATOR) &&
      (index === 0 || is(left, NodeType.OPERATOR))
    ) {
      const prefix = prefixNode(operator, right);
      nodes[index] = prefix;
      nodes.splice(index + 1, 1);

      return prefix;
    }

    if (
      operatorType === OperatorType.POSTFIX &&
      !is(left, NodeType.OPERATOR) &&
      (index === nodes.length - 1 || is(right, NodeType.OPERATOR))
    ) {
      const postfix = postfixNode(operator, left);
      nodes[index] = postfix;
      nodes.splice(index - 1, 1);

      return postfix;
    }

    if (operatorType === OperatorType.INFIX && !is(left, NodeType.OPERATOR) && !is(right, NodeType.OPERATOR)) {
      const infix = handleInfix(operator, left, right);
      nodes[index] = infix;
      nodes.splice(index - 1, 1);
      nodes.splice(index, 1);

      return infix;
    }
  }

  return null;
}
