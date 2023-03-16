import { Node, NodeType, TokenNode } from '~/node/node';

export interface InfixNode extends Node {
  type: NodeType.INFIX;
  operator: TokenNode;
  left: Node;
  right: Node;
}

export function infixNode(operator: TokenNode, left: Node, right: Node): InfixNode {
  return {
    type: NodeType.INFIX,
    operator,
    left,
    right,
  };
}
