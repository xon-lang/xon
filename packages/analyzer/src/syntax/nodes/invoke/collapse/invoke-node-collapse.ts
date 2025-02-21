import {$GroupNode, InvokeNode, invokeNode, Node, NodeCollapseFn, NodeCollapseResult} from '#analyzer';
import {ArrayData, Integer, nothing} from '#common';
import {is} from '#typing';

export function collapseInvokeNode(): NodeCollapseFn<InvokeNode> {
  return {
    min: 2,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<InvokeNode> => {
      return nodes.firstMap((groupNode, index) => {
        if (index === 0 || !is(groupNode, $GroupNode())) {
          return nothing;
        }

        const instanceNode = nodes.at(index - 1);

        if (!instanceNode?.canBeExpression) {
          return nothing;
        }

        return {
          index: index - 1,
          deleteCount: 2,
          node: invokeNode(instanceNode, groupNode),
        };
      }, startIndex);
    },
  };
}
