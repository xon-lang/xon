import {
  $AssignOperatorNode,
  $TypeNode,
  newOperatorExpressionNode,
  newValueNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
  ValueNode,
} from '#analyzer';
import {ArrayData, Integer, nothing} from '#common';
import {is} from '#typing';

export function collapseValueNode(): NodeCollapseFn<ValueNode> {
  return {
    min: 1,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<ValueNode> => {
      return nodes.lastMap((operatorNode, index) => {
        if (!is(operatorNode, $AssignOperatorNode())) {
          return nothing;
        }

        const leftNode = nodes.at(index - 1);
        const rightNode = nodes.at(index + 1);

        const operatorExpressionNode = newOperatorExpressionNode(
          operatorNode,
          rightNode?.canBeExpression ? rightNode : nothing,
        );

        if (leftNode?.canBeExpression || is(leftNode, $TypeNode())) {
          return {
            index: index - 1,
            deleteCount: 1 + operatorExpressionNode.children!.count(),
            node: newValueNode(leftNode, operatorExpressionNode),
          };
        }

        return {
          index: index - 1,
          deleteCount: operatorExpressionNode.children!.count(),
          node: newValueNode(nothing, operatorExpressionNode),
        };
      }, startIndex);
    },
  };
}
