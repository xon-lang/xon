import { Node, NodeType } from '~/node/node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface InfixNode extends Node {
  type: NodeType.INFIX;
  operator: OperatorNode;
  left: Node;
  right: Node;
}

export function infixNode(operator: OperatorNode, left: Node, right: Node): InfixNode {
  return {
    type: NodeType.INFIX,
    operator,
    left,
    right,
  };
}
