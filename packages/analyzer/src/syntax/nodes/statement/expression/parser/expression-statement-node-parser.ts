import {collapseNodes, ExpressionStatementNode, newExpressionStatementNode, Node2} from '#analyzer';
import {ArrayData, Integer} from '#common';

export function parseExpressionStatementNode(
  indent: Integer,
  nodes: ArrayData<Node2>,
): ExpressionStatementNode {
  nodes = collapseNodes(nodes);

  return newExpressionStatementNode(indent, nodes.first()!, nodes.slice(1));
}
