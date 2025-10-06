import {
  $SyntaxNode,
  AnalyzerContext,
  collapseNodes,
  ExpressionStatementNode,
  newExpressionStatementNode,
  Node,
} from '#analyzer';
import {ArrayData, Integer, nothing, Nothing} from '#common';
import {is} from '#typing';

export function parseExpressionStatementNode(
  context: AnalyzerContext,
  indent: Integer,
  nodes: ArrayData<Node>,
): ExpressionStatementNode | Nothing {
  nodes = collapseNodes(context, nodes);
  const firstNode = nodes.first();

  if (!is(firstNode, $SyntaxNode())) {
    return nothing;
  }

  context.extraNodes.addLastItems(nodes.slice(1));

  return newExpressionStatementNode(indent, firstNode);
}
