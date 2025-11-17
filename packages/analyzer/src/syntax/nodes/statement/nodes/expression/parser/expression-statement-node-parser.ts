import {
  $SyntaxNode,
  AnalyzerContext,
  collapseNodes,
  ExpressionStatementNode,
  newExpressionStatementNode,
  Node,
} from '#analyzer';
import {ArrayData, is, nothing, Nothing} from '#core';

export function parseExpressionStatementNode(
  context: AnalyzerContext,
  nodes: ArrayData<Node>,
): ExpressionStatementNode | Nothing {
  nodes = collapseNodes(context, nodes);
  const firstNode = nodes.first();

  if (!is(firstNode, $SyntaxNode())) {
    return nothing;
  }

  context.extraNodes.addLastItems(nodes.slice(1));

  return newExpressionStatementNode(firstNode);
}
