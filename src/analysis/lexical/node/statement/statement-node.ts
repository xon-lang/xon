import { is } from '~/analysis/is';
import { Node, NodeType } from '~/analysis/node';
import { Integer } from '~/lib/core';

export interface StatementNode extends Node {
  $: NodeType.STATEMENT;
  indent: Integer;
  nodes: Node[];
}

export function statementNode(nodes: Node[]): StatementNode {
  if (nodes.length === 0) {
    throw new Error('Not implemented');
  }
  const first = nodes[0];
  const last = nodes[nodes.length - 1];
  const indent = is(first, NodeType.WHITESPACE) ? first.stop - first.start + 1 : 0;
  return {
    $: NodeType.STATEMENT,
    start: first.start,
    stop: last.stop,
    indent,
    nodes,
  };
}
