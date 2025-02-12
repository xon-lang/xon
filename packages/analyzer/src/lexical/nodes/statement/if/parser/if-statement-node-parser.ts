import {$IfKeywordNode, collapseNodes, IfStatementNode, newIfStatementNode, Node2} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function parseIfStatementNode(
  indentLevel: Integer,
  nodes: ArrayData<Node2>,
): IfStatementNode | Nothing {
  const keywordNode = nodes.first();

  if (!is(keywordNode, $IfKeywordNode)) {
    return nothing;
  }

  nodes = collapseNodes(nodes.slice(1));
  const conditionNode = nodes.first();

  if (conditionNode?.canBeExpression) {
    return newIfStatementNode(indentLevel, keywordNode, conditionNode, nodes.slice(1));
  }

  return newIfStatementNode(indentLevel, keywordNode, nothing, nodes);
}
