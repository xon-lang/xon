import {$IfKeywordNode, collapseNodes, IfStatementNode, newIfStatementNode, Node} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function parseIfStatementNode(
  indentLevel: Integer,
  nodes: ArrayData<Node>,
): IfStatementNode | Nothing {
  const keywordNode = nodes.first();

  if (!is(keywordNode, $IfKeywordNode())) {
    return nothing;
  }

  nodes = collapseNodes(nodes.slice(1));
  const conditionExpressionNode = nodes.first();

  if (conditionExpressionNode?.canBeExpression) {
    return newIfStatementNode(indentLevel, keywordNode, conditionExpressionNode, nodes.slice(1));
  }

  return newIfStatementNode(indentLevel, keywordNode, nothing, nodes);
}
