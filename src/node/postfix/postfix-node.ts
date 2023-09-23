import { Node, NodeType } from '~/analysis/node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface PostfixNode extends Node {
  $: NodeType.POSTFIX;
  operator: OperatorNode;
  value: Node;
}

export function postfixNode(operator: OperatorNode, value: Node): PostfixNode {
  return {
    $: NodeType.POSTFIX,
    hidden: [],
    start: value.start,
    stop: operator.stop,
    operator,
    value,
  };
}
