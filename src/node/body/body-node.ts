import { Node, NodeType } from '~/node/node';

export interface BodyNode extends Node {
  nodes: Node[];
}

export function bodyNode(nodes: Node[]): BodyNode {
  return {
    type: NodeType.BODY,
    start: nodes[0].start,
    stop: nodes[nodes.length - 1].stop,
    nodes,
  };
}
