import {$IdNode, $SymbolOperatorNode, memberNode, Node2, POINT, SyntaxCollapseResult} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function collapseMemberNode(
  nodes: ArrayData<Node2>,
  startIndex?: Integer | Nothing,
): SyntaxCollapseResult {
  return nodes.firstMap((operatorNode, index) => {
    if (!is(operatorNode, $SymbolOperatorNode) || !operatorNode.text.equals(POINT)) {
      return nothing;
    }

    const instanceNode = nodes.at(index - 1);

    if (!instanceNode?.canBeExpression) {
      return nothing;
    }

    const rightNode = nodes.at(index + 1);
    const idNode = is(rightNode, $IdNode) ? rightNode : nothing;

    return {node: memberNode(instanceNode, operatorNode, idNode), index: index - 1};
  }, startIndex);
}
