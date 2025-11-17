import {
  $ExpressionNode,
  $IfKeywordNode,
  AnalyzerContext,
  collapseNodes,
  IfStatementNode,
  newIfStatementNode,
  Node,
} from '#analyzer';
import {ArrayData, is, newText, Nothing, nothing} from '#core';

export function parseIfStatementNode(
  context: AnalyzerContext,
  nodes: ArrayData<Node>,
): IfStatementNode | Nothing {
  const keywordNode = nodes.first();

  if (!is(keywordNode, $IfKeywordNode())) {
    return nothing;
  }

  nodes = collapseNodes(context, nodes.slice(1));
  const conditionExpressionNode = nodes.first();

  if (is(conditionExpressionNode, $ExpressionNode())) {
    context.extraNodes.addLastItems(nodes.slice(1));
    return newIfStatementNode(keywordNode, conditionExpressionNode);
  }

  context.extraNodes.addLastItems(nodes);
  context.addError(keywordNode.range, newText(`Expect expression`));

  return newIfStatementNode(keywordNode, nothing);
}
