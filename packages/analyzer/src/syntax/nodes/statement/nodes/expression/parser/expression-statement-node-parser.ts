import {
  $SyntaxNode,
  collapseNodes,
  ExpressionStatementNode,
  newExpressionStatementNode,
  Node,
} from '#analyzer';
import {ArrayData, Integer, nothing, Nothing} from '#common';
import {is} from '#typing';

export function parseExpressionStatementNode(
  indent: Integer,
  nodes: ArrayData<Node>,
): ExpressionStatementNode | Nothing {
  nodes = collapseNodes(nodes);
  const firstNode = nodes.first();

  if (!is(firstNode, $SyntaxNode())) {
    return nothing;
  }

  return newExpressionStatementNode(indent, firstNode, nodes.slice(1));
}
