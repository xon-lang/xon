import { Node, NodeType } from '~/node/node';

export interface BodyNode extends Node {
  type: NodeType.BODY;
  nodes: Node[];
}

export function bodyNode(nodes: Node[]): BodyNode {
  return {
    type: NodeType.BODY,
    nodes,
  };
}
