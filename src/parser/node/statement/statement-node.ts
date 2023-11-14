import { clonePosition } from '~/parser/node/node-position';
import { Node } from '../node';
import { NodeType } from '../node-type';

export interface StatementNode extends Node {
  readonly $: NodeType.STATEMENT;
  readonly nodes: Node[];
  readonly parent: StatementNode | null;
  readonly children: StatementNode[];
}

export function statementNode(nodes: Node[], parent: StatementNode | null): StatementNode {
  const start = clonePosition(nodes.first().start);
  const stop = clonePosition(nodes.last().stop);

  const statement: StatementNode = {
    $: NodeType.STATEMENT,
    start,
    stop,
    nodes,
    parent,
    children: [],
  };

  if (parent) {
    parent.children.push(statement);
  }

  return statement;
}
