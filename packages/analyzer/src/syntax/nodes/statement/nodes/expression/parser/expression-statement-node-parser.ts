import {collapseNodes, ExpressionStatementNode, newExpressionStatementNode, Node} from '#analyzer';
import {ArrayData, Integer} from '#common';

export function parseExpressionStatementNode(
  indent: Integer,
  nodes: ArrayData<Node>,
): ExpressionStatementNode {
  nodes = collapseNodes(nodes);

  return newExpressionStatementNode(indent, nodes.first()!, nodes.slice(1));
}
