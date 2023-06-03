import { Node, NodeType } from '~/analysis/node';

export interface StatementNode extends Node {
  $: NodeType.STATEMENT;
  nodes: Node[];
}

export function statementNode(nodes: Node[]): StatementNode {
  if (nodes.length === 0) {
    throw new Error('Not implemented');
  }
  const first = nodes[0];
  const last = nodes[nodes.length - 1];
  return {
    $: NodeType.STATEMENT,
    start: first.start,
    stop: last.stop,
    nodes,
  };
}
