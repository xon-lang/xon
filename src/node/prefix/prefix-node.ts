import { Node, NodeType } from '~/node/node';

export interface PrefixNode extends Node {
  operator: Node;
  value: Node;
}

export function prefixNode(operator: Node, value: Node): PrefixNode {
  return {
    type: NodeType.PREFIX,
    start: operator.start,
    stop: value.stop,
    operator,
    value,
  };
}
