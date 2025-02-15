import {$GroupNode, invokeNode, Node, NodeCollapseResult} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function collapseInvokeNode(
  nodes: ArrayData<Node>,
  startIndex?: Integer | Nothing,
): NodeCollapseResult {
  return nodes.firstMap((groupNode, index) => {
    if (index === 0 || !is(groupNode, $GroupNode())) {
      return nothing;
    }

    const instanceNode = nodes.at(index - 1);

    if (!instanceNode?.canBeExpression) {
      return nothing;
    }

    return {node: invokeNode(instanceNode, groupNode), index: index - 1};
  }, startIndex);
}
