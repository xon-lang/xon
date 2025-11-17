import {
  $ExpressionNode,
  $ReturnKeywordNode,
  AnalyzerContext,
  collapseNodes,
  newReturnStatementNode,
  Node,
  ReturnStatementNode,
} from '#analyzer';
import {ArrayData, is, Nothing, nothing} from '#core';

export function parseReturnStatementNode(
  context: AnalyzerContext,
  nodes: ArrayData<Node>,
): ReturnStatementNode | Nothing {
  const keywordNode = nodes.first();

  if (!is(keywordNode, $ReturnKeywordNode())) {
    return nothing;
  }

  nodes = collapseNodes(context, nodes.slice(1));
  const expressionNode = nodes.first();

  if (is(expressionNode, $ExpressionNode())) {
    context.extraNodes.addLastItems(nodes.slice(1));

    return newReturnStatementNode(keywordNode, expressionNode);
  }

  context.extraNodes.addLastItems(nodes);

  return newReturnStatementNode(keywordNode, nothing);
}
