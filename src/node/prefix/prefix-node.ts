import { Node, NodeType } from '~/analysis/node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface PrefixNode extends Node {
  $: NodeType.PREFIX;
  operator: OperatorNode;
  value: Node;
}

export function prefixNode(operator: OperatorNode, value: Node): PrefixNode {
  return {
    $: NodeType.PREFIX,
    hidden: [],
    start: operator.start,
    stop: value.stop,
    operator,
    value,
  };
}
