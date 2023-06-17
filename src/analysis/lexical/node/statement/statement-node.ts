import { BodyNode } from '~/analysis/lexical/node/body/body-node';
import { Node, NodeType, Token } from '~/analysis/node';

export interface StatementNode extends Node {
  $: NodeType.STATEMENT;
  tokens: Token[];
  syntaxNodes: Node[];
  body: BodyNode | null;
}

export function statementNode(tokens: Token[], syntaxNodes: Node[], body: BodyNode| null = null): StatementNode {
  return {
    $: NodeType.STATEMENT,
    tokens,
    syntaxNodes,
    body,
  };
}
