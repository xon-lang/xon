import { BodyNode } from '~/parser/node/body/body-node';
import { Node } from '../node';
import { NodeType } from '../node-type';

export interface StatementNode extends Node {
  $: NodeType.STATEMENT;
  nodes: Node[];
  body: BodyNode | null;
}

export function statementNode(nodes: Node[], body: BodyNode | null): StatementNode {
  const first = nodes.firstOrNull();
  const last = nodes.lastOrNull();

  return {
    $: NodeType.STATEMENT,
    start: first?.start ?? 0,
    stop: (first ?? last)?.stop ?? 0,
    nodes,
    body,
  };
}
