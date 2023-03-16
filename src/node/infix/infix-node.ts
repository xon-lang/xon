import { Node, NodeType } from '~/node/node';

export interface InfixNode extends Node {
  operator: Node;
  left: Node;
  right: Node;
}

export function infixNode(operator: Node, left: Node, right: Node): InfixNode {
  return {
    type: NodeType.INFIX,
    start: left.start,
    stop: right.stop,
    operator,
    left,
    right,
  };
}
