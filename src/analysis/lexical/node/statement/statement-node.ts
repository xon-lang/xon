import { BodyNode } from '~/analysis/lexical/node/body/body-node';
import { Node, NodeType } from '~/analysis/node';

export interface StatementNode extends Node {
  $: NodeType.STATEMENT;
  nodes: Node[];
  body: BodyNode | null;
}

export function statementNode(nodes: Node[], body: BodyNode | null = null): StatementNode {
  const first = nodes.firstOrNull();
  const last = nodes.lastOrNull();

  return {
    $: NodeType.STATEMENT,
    start: first?.start ?? 0,
    stop: last?.stop ?? first?.stop ?? 0,
    nodes,
    body,
  };
}
