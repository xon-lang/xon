import {Integer, Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {SyntaxNode, getRangeAndChildren} from '../syntax-node';

export interface StatementNode extends SyntaxNode {
  $: $Node.STATEMENT;
  indentLevel: Integer;
  parent: StatementNode | Nothing;
  item: Node;
  body: StatementNode[];
}

export function statementNode(context: SyntaxContext, item: Node, parent: StatementNode | Nothing): StatementNode {
  const node: StatementNode = {
    $: $Node.STATEMENT,
    indentLevel: parent ? parent.indentLevel + 1 : 0,
    ...getRangeAndChildren(item),
    parent,
    item,
    body: [],
  };

  if (parent) {
    parent.body.push(node);
  } else {
    context.statements.push(node);
  }

  return node;
}
