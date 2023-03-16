import { Node, NodeType, TokenNode } from '~/node/node';

export interface PostfixNode extends Node {
  type: NodeType.POSTFIX;
  operator: TokenNode;
  value: Node;
}

export function postfixNode(operator: TokenNode, value: Node): PostfixNode {
  return {
    type: NodeType.POSTFIX,
    operator,
    value,
  };
}
