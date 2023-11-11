import { StatementNode } from '~/parser/node/statement/statement-node';
import { Node } from '../node';
import { NodeType } from '../node-type';

export interface BodyNode extends Node {
  $: NodeType.BODY;
  // todo remove head property
  head: StatementNode | null;
  statements: StatementNode[];
}

export function bodyNode(head: StatementNode | null, statements: StatementNode[]): BodyNode {
  const first = statements.firstOrNull()?.nodes.firstOrNull();
  const last = statements.lastOrNull()?.nodes.lastOrNull();

  return {
    $: NodeType.BODY,
    head,
    start: first?.start ?? 0,
    stop: last?.stop ?? first?.stop ?? 0,
    row: first?.row ?? 0,
    column: first?.column ?? 0,
    statements,
  };
}
