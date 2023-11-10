import { BodyNode } from '~/parser/node/body/body-node';
import { Node } from '../node';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface StatementNode extends Node {
  $: NodeType.STATEMENT;
  hidden: TokenNode[];
  nodes: Node[];
  body: BodyNode | null;
}

export function statementNode(nodes: Node[], body: BodyNode | null, hidden: TokenNode[]): StatementNode {
  const first = nodes.firstOrNull();
  const last = nodes.lastOrNull();

  return {
    $: NodeType.STATEMENT,
    hidden,
    start: first?.start ?? 0,
    stop: (first ?? last)?.stop ?? 0,
    nodes,
    body,
  };
}
