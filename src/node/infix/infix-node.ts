import { Node, NodeType } from '~/node/node';

export interface InfixNode extends Node {
  operator: Node;
  left: Node;
  right: Node;
}

export function infixNode(operator: Node, left: Node, right: Node): InfixNode {
  return {
    nodeType: NodeType.INFIX,
    startIndex: left.startIndex,
    stopIndex: right.stopIndex,
    text: left.text + operator.text + right.text,
    operator,
    left,
    right,
  };
}
