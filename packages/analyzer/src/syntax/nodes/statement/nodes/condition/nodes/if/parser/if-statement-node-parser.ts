import {
  $ExpressionNode,
  $IfKeywordNode,
  AnalyzerContext,
  collapseNodes,
  IfStatementNode,
  newIfStatementNode,
  Node,
} from '#analyzer';
import {ArrayData, Integer, is, newText, Nothing, nothing} from '#core';

export function parseIfStatementNode(
  context: AnalyzerContext,
  indentLevel: Integer,
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
    return newIfStatementNode(indentLevel, keywordNode, conditionExpressionNode);
  }

  context.extraNodes.addLastItems(nodes);
  context.addError(keywordNode.range, newText(`Expect expression`));

  return newIfStatementNode(indentLevel, keywordNode, nothing);
}
