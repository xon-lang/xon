import {
  $SyntaxNode,
  AnalyzerContext,
  collapseNodes,
  ExpressionStatementNode,
  newExpressionStatementNode,
  Node,
} from '#analyzer';
import {ArrayData, Integer, newText, nothing, Nothing} from '#common';
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

  const errorNodes = nodes.slice(1);
  errorNodes.forEach((x) => context.addError(x.range, newText(`Expected single expression`)));

  return newExpressionStatementNode(indent, firstNode, errorNodes);
}
