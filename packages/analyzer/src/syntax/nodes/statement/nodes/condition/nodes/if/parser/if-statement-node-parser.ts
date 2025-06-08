import {
  $ExpressionNode,
  $IfKeywordNode,
  AnalyzerContext,
  collapseNodes,
  IfStatementNode,
  newIfStatementNode,
  Node,
} from '#analyzer';
import {ArrayData, Integer, newText, Nothing, nothing} from '#common';
import {is} from '#typing';

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
    return newIfStatementNode(indentLevel, keywordNode, conditionExpressionNode, nodes.slice(1));
  }

  context.addError(keywordNode.range, newText(`Expect expression`));

  return newIfStatementNode(indentLevel, keywordNode, nothing, nodes);
}
