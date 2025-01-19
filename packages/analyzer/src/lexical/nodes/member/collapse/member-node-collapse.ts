import {$IdNode, $OperatorNode, MEMBER, memberNode, Node2, SyntaxCollapseResult} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function collapseMemberNode(
  nodes: ArrayData<Node2>,
  startIndex?: Integer | Nothing,
): SyntaxCollapseResult {
  return nodes.firstMap((operatorNode, index) => {
    if (!is(operatorNode, $OperatorNode) || !operatorNode.text.equals(MEMBER)) {
      return nothing;
    }

    const instanceNode = nodes.at2(index - 1);

    if (is(instanceNode, $OperatorNode)) {
      return nothing;
    }

    const rightNode = nodes.at(index + 1);
    const idNode = is(rightNode, $IdNode) ? rightNode : nothing;

    return {node: memberNode(instanceNode, operatorNode, idNode), index: index - 1};
  }, startIndex);
}
