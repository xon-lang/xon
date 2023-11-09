import { BodyNode } from '~/parser/node/body/body-node';
import { SyntacticNode } from '~/parser/node/lexical-node';
import { NodeType } from '~/parser/node/node';
import { HiddenLexicalNode } from '../lexical-node';

export interface StatementNode extends SyntacticNode {
  $: NodeType.STATEMENT;
  hidden: HiddenLexicalNode[];
  nodes: SyntacticNode[];
  body: BodyNode | null;
}

export function statementNode(nodes: SyntacticNode[], body: BodyNode | null = null): StatementNode {
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
