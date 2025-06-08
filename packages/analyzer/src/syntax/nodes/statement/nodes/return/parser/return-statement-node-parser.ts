import {
  $ExpressionNode,
  $ReturnKeywordNode,
  AnalyzerContext,
  collapseNodes,
  newReturnStatementNode,
  Node,
  ReturnStatementNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function parseReturnStatementNode(
  context: AnalyzerContext,
  indent: Integer,
  nodes: ArrayData<Node>,
): ReturnStatementNode | Nothing {
  const keywordNode = nodes.first();

  if (!is(keywordNode, $ReturnKeywordNode())) {
    return nothing;
  }

  nodes = collapseNodes(context, nodes.slice(1));
  const expressionNode = nodes.first();

  if (is(expressionNode, $ExpressionNode())) {
    return newReturnStatementNode(indent, keywordNode, expressionNode, nodes.slice(1));
  }

  return newReturnStatementNode(indent, keywordNode, nothing, nodes);
}
