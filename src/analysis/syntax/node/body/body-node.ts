import { Node, NodeType } from '~/analysis/node';

export interface BodyNode extends Node {
  $: NodeType.BODY;
  nodes: Node[];
}

export function bodyNode(nodes: Node[]): BodyNode {
  return {
    $: NodeType.BODY,
    nodes,
  };
}
