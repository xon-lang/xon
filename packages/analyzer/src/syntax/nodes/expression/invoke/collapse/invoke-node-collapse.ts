import {
  $ExpressionNode,
  $GroupNode,
  InvokeNode,
  invokeNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
} from '#analyzer';
import {ArrayData, Integer, is, nothing} from '#core';

export function collapseInvokeNode(): NodeCollapseFn<InvokeNode> {
  return {
    min: 2,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<InvokeNode> => {
      return nodes.firstMap((groupNode, index) => {
        if (index === 0 || !is(groupNode, $GroupNode())) {
          return nothing;
        }

        const target = nodes.at(index - 1);

        if (!is(target, $ExpressionNode())) {
          return nothing;
        }

        return {
          index: index - 1,
          deleteCount: 2,
          node: invokeNode(target, groupNode),
        };
      }, startIndex);
    },
  };
}
