import { clonePosition, noNodePosition } from '~/parser/node/node-position';
import { StatementNode } from '~/parser/node/statement/statement-node';
import { Node } from '../node';
import { NodeType } from '../node-type';

export interface BodyNode extends Node {
  $: NodeType.BODY;
  statements: StatementNode[];
}

export function bodyNode(statements: StatementNode[]): BodyNode {
  const first = statements.first().nodes.first();
  const last = statements.last().nodes.last();

  return {
    $: NodeType.BODY,
    start: first ? clonePosition(first.start) : noNodePosition(),
    stop: last ? clonePosition(last.stop) : noNodePosition(),
    statements,
  };
}
