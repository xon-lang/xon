import { clonePosition } from '~/parser/node/node-position';
import { Node } from '../node';
import { NodeType } from '../node-type';

export interface StatementNode extends Node {
  readonly $: NodeType.STATEMENT;
  readonly node: Node;
  readonly parent: StatementNode | null;
  readonly children: StatementNode[];
}

export function statementNode(node: Node, parent: StatementNode | null): StatementNode {
  const start = clonePosition(node.start);
  const stop = clonePosition(node.stop);

  const statement: StatementNode = {
    $: NodeType.STATEMENT,
    start,
    stop,
    node,
    parent,
    children: [],
  };

  if (parent) {
    parent.children.push(statement);
  }

  return statement;
}
