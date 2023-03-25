import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { Node, NodeType } from '~/analysis/node';

export interface PrefixNode extends Node {
  $: NodeType.PREFIX;
  operator: OperatorNode;
  value: Node;
}

export function prefixNode(operator: OperatorNode, value: Node): PrefixNode {
  return {
    $: NodeType.PREFIX,
    start: operator.start,
    stop: value.stop,
    operator,
    value,
  };
}
