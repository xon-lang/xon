import { Nothing } from '../../../../lib/core';
import { SyntaxContext } from '../../../syntax-context';
import { $Node, Node, addNodeParent } from '../../node';
import { SyntaxNode } from '../syntax-node';

export interface StatementNode extends SyntaxNode {
  $: $Node.STATEMENT;
  parent: StatementNode | Nothing;
  item: Node;
  body: StatementNode[];
}

export function statementNode(context: SyntaxContext, item: Node, parent: StatementNode | Nothing): StatementNode {
  const node: StatementNode = {
    $: $Node.STATEMENT,
    range: item.range,
    children: [],
    parent,
    item,
    body: [],
  };

  addNodeParent(node, item);

  if (parent) {
    parent.body.push(node);
  } else {
    context.statements.push(node);
  }

  return node;
}
