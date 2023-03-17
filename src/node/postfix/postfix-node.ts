import { Node, NodeType } from '~/analysis/node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface PostfixNode extends Node {
  type: NodeType.POSTFIX;
  operator: OperatorNode;
  value: Node;
}

export function postfixNode(operator: OperatorNode, value: Node): PostfixNode {
  return {
    type: NodeType.POSTFIX,
    operator,
    value,
  };
}
