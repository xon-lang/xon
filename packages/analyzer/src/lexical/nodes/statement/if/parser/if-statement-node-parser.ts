import {
  $IfKeywordNode,
  collapseNodes,
  IfStatementNode,
  KeywordNode,
  newIfStatementNode,
  Node2,
} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function parseIfStatementNode(
  indentLevel: Integer,
  keywordNode: KeywordNode,
  nodes: ArrayData<Node2>,
): IfStatementNode | Nothing {
  if (!is(keywordNode, $IfKeywordNode)) {
    return nothing;
  }

  nodes = collapseNodes(nodes);
  const conditionNode = nodes.first();

  if (conditionNode?.canBeExpression) {
    return newIfStatementNode(indentLevel, keywordNode, conditionNode, nodes.slice(1));
  }

  return newIfStatementNode(indentLevel, keywordNode, nothing, nodes);
}
