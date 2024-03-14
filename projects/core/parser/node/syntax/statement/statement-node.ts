import {Integer, Nothing} from '../../../../lib/core';
import {rangeFromNodes} from '../../../../source/source-range';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {TokenNode} from '../../token/token-node';
import {DeclarationNode} from '../declaration/declaration-node';
import {SyntaxNode} from '../syntax-node';

export interface StatementNode extends SyntaxNode {
  $: $Node.STATEMENT;
  indentLevel: Integer;
  indentStopColumn: Integer;
  beforeIndentHiddenNodes: TokenNode[];
  indentHiddenNodes: TokenNode[];
  parent: StatementNode | Nothing;
  children: Node[];
  item: Node;
  declaration: DeclarationNode | Nothing;
  body: StatementNode[];
}

// todo perhaps like a declaration node we need to move from syntax nodes ???
export function statementNode(
  context: SyntaxContext,
  children: Node[],
  parent: StatementNode | Nothing,
  indentStopColumn: Integer,
  beforeIndentHiddenNodes: TokenNode[],
  indentHiddenNodes: TokenNode[],
  declaration: DeclarationNode | Nothing,
): StatementNode {
  const range = rangeFromNodes([children.first()!, children.last()!]);

  const node: StatementNode = {
    $: $Node.STATEMENT,
    range,
    children,
    hiddenNodes: [],
    indentLevel: parent ? parent.indentLevel + 1 : 0,
    indentStopColumn,
    beforeIndentHiddenNodes,
    indentHiddenNodes,
    parent,
    item: children[0],
    body: [],
    declaration,
  };

  if (parent) {
    parent.body.push(node);
  } else {
    context.statements.push(node);
  }

  children.forEach((x) => (x.parent = node));

  return node;
}
