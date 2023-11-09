import { SyntacticNode } from '~/parser/lexical/lexical-node';
import { NodeType } from '~/parser/lexical/node';
import { StatementNode } from '~/parser/lexical/statement/statement-node';

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
