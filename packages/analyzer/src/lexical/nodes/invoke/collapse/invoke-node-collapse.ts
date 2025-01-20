import {$GroupNode, $OperatorNode, invokeNode, Node2, SyntaxCollapseResult} from '#analyzer';
import {ArrayData, Integer, Nothing, nothing} from '#common';
import {is} from '#typing';

export function collapseInvokeNode(
  nodes: ArrayData<Node2>,
  startIndex?: Integer | Nothing,
): SyntaxCollapseResult {
  return nodes.firstMap((groupNode, index) => {
    if (index === 0 || !is(groupNode, $GroupNode)) {
      return nothing;
    }

    const instanceNode = nodes.at(index - 1);

    if (!instanceNode || is(instanceNode, $OperatorNode)) {
      return nothing;
    }

    return {node: invokeNode(instanceNode, groupNode), index: index - 1};
  }, startIndex);
}
