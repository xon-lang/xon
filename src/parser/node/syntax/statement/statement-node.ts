import {Integer, Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {TokenNode} from '../../token/token-node';
import {SyntaxNode, getRangeAndChildren} from '../syntax-node';

export interface StatementNode extends SyntaxNode {
  $: $Node.STATEMENT;
  indentLevel: Integer;
  indentStopColumn: Integer;
  beforeIndentHiddenNodes: TokenNode[];
  indentHiddenNodes: TokenNode[];
  parent: StatementNode | Nothing;
  children: Node[];
  item: Node;
  body: StatementNode[];
}

export function statementNode(
  context: SyntaxContext,
  children: Node[],
  parent: StatementNode | Nothing,
  indentStopColumn: Integer,
  beforeIndentHiddenNodes: TokenNode[],
  indentHiddenNodes: TokenNode[],
): StatementNode {
  const node: StatementNode = {
    $: $Node.STATEMENT,
    ...getRangeAndChildren(...children),
    indentLevel: parent ? parent.indentLevel + 1 : 0,
    indentStopColumn,
    beforeIndentHiddenNodes,
    indentHiddenNodes,
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
