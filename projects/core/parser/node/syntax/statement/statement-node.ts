import {Array2, Integer, Nothing} from '../../../../lib/core';
import {rangeFromNodes} from '../../../../util/resource/text/text-resource-range';
import {SyntaxContext} from '../../../syntax-context';
import {DeclarationNode} from '../../declaration/declaration-node';
import {$Node, Node} from '../../node';
import {TokenNode} from '../../token/token-node';
import {SyntaxNode} from '../syntax-node';

export interface StatementNode extends SyntaxNode {
  $: $Node.STATEMENT;
  indentLevel: Integer;
  indentStopColumn: Integer;
  beforeIndentHiddenNodes: Array2<TokenNode>;
  indentHiddenNodes: Array2<TokenNode>;
  parent: StatementNode | Nothing;
  children: Array2<Node>;
  item: Node;
  declaration: DeclarationNode | Nothing;
  body: Array2<StatementNode>;
}

export function statementNode(
  context: SyntaxContext,
  children: Array2<Node>,
  parent: StatementNode | Nothing,
  indentStopColumn: Integer,
  beforeIndentHiddenNodes: Array2<TokenNode>,
  indentHiddenNodes: Array2<TokenNode>,
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
