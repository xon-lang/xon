import { StatementNode } from '~/analysis/lexical/node/statement/statement-node';
import { Node, NodeType } from '~/analysis/node';

export interface BodyNode extends Node {
  $: NodeType.BODY;
  statements: StatementNode[];
}

export function bodyNode(statements: StatementNode[]): BodyNode {
  return {
    $: NodeType.BODY,
    statements,
  };
}
