import { Node, NodeType } from '~/analysis/node';
import { StatementNode } from '~/node/statement/statement-node';

export interface BodyNode extends Node {
  $: NodeType.BODY;
  statements: StatementNode[];
}

export function bodyNode(statements: StatementNode[]): BodyNode {
  const first = statements.firstOrNull()?.nodes.firstOrNull();
  const last = statements.lastOrNull()?.nodes.lastOrNull();

  return {
    $: NodeType.BODY,
    start: first?.start ?? 0,
    stop: last?.stop ?? first?.stop ?? 0,
    statements,
  };
}
