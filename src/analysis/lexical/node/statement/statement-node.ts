import { Node, NodeType } from '~/analysis/node';

export interface StatementNode extends Node {
  $: NodeType.STATEMENT;
  nodes: Node[];
  after?: Node[];
}

export function statementNode(nodes: Node[]): StatementNode {
  if (nodes.length === 0) {
    return {
      $: NodeType.STATEMENT,
      start: 0,
      stop: 0,
      nodes,
    };
  }

  if (nodes.length === 0) {
    throw new Error('Not implemented');
  }

  const first = nodes.first();
  const last = nodes.last();

  return {
    $: NodeType.STATEMENT,
    start: first.start,
    stop: last.stop,
    nodes,
  };
}
