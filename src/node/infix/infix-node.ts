import { Node, NodeType } from '~/analysis/node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface InfixNode extends Node {
  $: NodeType.INFIX;
  operator: OperatorNode;
  left: Node;
  right: Node;
}

export function infixNode(operator: OperatorNode, left: Node, right: Node): InfixNode {
  return {
    $: NodeType.INFIX,
    hidden: [],
    start: left.start,
    stop: right.stop,
    operator,
    left,
    right,
  };
}
