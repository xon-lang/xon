import {
  $ExpressionNode,
  $ReturnKeywordNode,
  collapseNodes,
  newReturnStatementNode,
  Node,
  ReturnStatementNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function parseReturnStatementNode(
  indent: Integer,
  nodes: ArrayData<Node>,
): ReturnStatementNode | Nothing {
  const keywordNode = nodes.first();

  if (!is(keywordNode, $ReturnKeywordNode())) {
    return nothing;
  }

  nodes = collapseNodes(nodes.slice(1));
  const expressionNode = nodes.first();

  if (is(expressionNode, $ExpressionNode())) {
    return newReturnStatementNode(indent, keywordNode, expressionNode, nodes.slice(1));
  }

  return newReturnStatementNode(indent, keywordNode, nothing, nodes);
}
