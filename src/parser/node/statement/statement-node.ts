import { BodyNode } from '~/parser/node/body/body-node';
import { Node, TokenNode } from '../node';
import { NodeType } from '../node-type';

export interface StatementNode extends Node {
  $: NodeType.STATEMENT;
  hidden: TokenNode[];
  nodes: Node[];
  body: BodyNode | null;
}

export function statementNode(nodes: Node[], body: BodyNode | null = null): StatementNode {
  const first = nodes.firstOrNull();
  const last = nodes.lastOrNull();

  return {
    $: NodeType.STATEMENT,
    hidden: [],
    start: first?.start ?? 0,
    stop: last?.stop ?? first?.stop ?? 0,
    nodes,
    body,
  };
}
