import { Node, NodeType, TokenNode } from '~/node/node';

export interface PrefixNode extends Node {
  type: NodeType.PREFIX;
  operator: TokenNode;
  value: Node;
}

export function prefixNode(operator: TokenNode, value: Node): PrefixNode {
  return {
    type: NodeType.PREFIX,
    operator,
    value,
  };
}
