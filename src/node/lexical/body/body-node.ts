import { SyntacticNode } from '~/node/lexical/lexical-node';
import { StatementNode } from '~/node/lexical/statement/statement-node';
import { NodeType } from '~/node/node';

export interface BodyNode extends SyntacticNode {
  $: NodeType.BODY;
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
    statements,
  };
}
