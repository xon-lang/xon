import { Node, NodeType } from '~/node/node';

export interface SourceNode extends Node {
  nodes: Node[];
}

export function sourceNode(nodes: Node[]): SourceNode {
  return {
    type: NodeType.SOURCE,
    startIndex: nodes[0].startIndex,
    stopIndex: nodes[nodes.length - 1].stopIndex,
    text: nodes.map((x) => x.text).join(''),
    nodes,
  };
}
