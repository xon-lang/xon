import {Integer, Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {SyntaxNode, getRangeAndChildren} from '../syntax-node';

export interface StatementNode extends SyntaxNode {
  $: $Node.STATEMENT;
  indentLevel: Integer;
  parent: StatementNode | Nothing;
  children: Node[];
  item: Node;
  body: StatementNode[];
}

export function statementNode(
  context: SyntaxContext,
  children: Node[],
  parent: StatementNode | Nothing,
): StatementNode {
  const node: StatementNode = {
    $: $Node.STATEMENT,
    indentLevel: parent ? parent.indentLevel + 1 : 0,
    ...getRangeAndChildren(...children),
    parent,
    item: children[0],
    body: [],
  };

  if (parent) {
    parent.body.push(node);
  } else {
    context.statements.push(node);
  }

  return node;
}
