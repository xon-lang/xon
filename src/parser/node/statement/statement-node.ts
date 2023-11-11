import { clonePosition, noNodePosition } from '~/parser/node/node-position';
import { Node } from '../node';
import { NodeType } from '../node-type';

export interface StatementNode extends Node {
  $: NodeType.STATEMENT;
  nodes: Node[];
  parent: StatementNode | null;
  children: StatementNode[];
}

export function statementNode(nodes: Node[]): StatementNode {
  const first = nodes.firstOrNull();
  const last = nodes.lastOrNull();

  return {
    $: NodeType.STATEMENT,
    start: first ? clonePosition(first.start) : noNodePosition(),
    stop: last ? clonePosition(last.stop) : noNodePosition(),
    nodes,
    parent: null,
    children: [],
  };
}
